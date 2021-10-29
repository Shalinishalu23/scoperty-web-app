import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  UserComment,
  UserDesignReviewTask,
  UserComponentTask,
  UserHeatExchangeTask,
  UserDoc,
} from 'src/app/shared/models/datainput-model';
import { UtilityService } from 'src/app/services/utility.service';

/**
 *
 *
 * @export
 * @class UserCommentTableComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-user-comment-table',
  templateUrl: './user-comment-table.component.html',
  styleUrls: ['./user-comment-table.component.scss'],
})
export class UserCommentTableComponent implements OnInit {
  selectedItem: any;
  selectedItemTask: any;
  selectedItemDoc: any;

  userName: string;
  reviewedBy: any;
  MOCStatus: any;
  segment: Array<object> = [];
  task: Array<object> = [];
  reviewType: Array<object> = [];
  supportedReview: Array<object> = [];

  clonedUserComments: { [s: string]: UserComment } = {};
  clonedUserTask: {} = {};
  clonedUserDoc: { [d: string]: UserDoc } = {};

  userComments: Array<UserComment> = [];
  userTask: Array<object> = [];
  userDesignReviewTask: Array<UserDesignReviewTask> = [];
  userComponentTask: Array<UserComponentTask> = [];
  userHeatExchangerTask: Array<UserHeatExchangeTask> = [];
  userDocs: Array<UserDoc> = [];

  count = 1;
  countTask = 1;
  countDoc = 1;

  delRow;
  delTaskRow;
  delDoc;

  lastRow: any;

  @Input() userCommentsList: any;
  @Input() userTaskList: any;
  @Input() userDocList: any;

  userCols: any;
  taskCols: any;
  docCols: any;

  @Output() userCommentTable = new EventEmitter();
  @Output() userTaskTable = new EventEmitter();
  @Output() userDocTable = new EventEmitter();

  // clearComments: boolean = true;
  @Input() tableFrom: any;

  /**
   * Creates an instance of UserCommentTableComponent.
   * @memberof UserCommentTableComponent
   */
  constructor(public utilityService: UtilityService) {}

  /**
   *
   *
   * @memberof UserCommentTableComponent
   */
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
    // if (this.clearComments) {
    //   this.userComments.push({userCommentsList
    //     userName: this.userName,
    //     sl: this.count,
    //     date: new Date(),
    //     comments: '',
    //   });
    // }
    this.insertUserComments();
    this.inserTaskComments();
    this.insertUserDoc();
  }

  /**
   *
   *
   * @memberof UserCommentTableComponent
   */
  addNewRow() {
    //find last item of userComments & check if data entered
    this.lastRow = [];
    this.lastRow = this.userComments.length
      ? this.userComments[this.userComments.length - 1]
      : [];

    if (this.lastRow.comments || this.lastRow.length < 1) {
      ++this.count;
      this.userComments.push({
        userName: this.userName,
        sl: this.count,
        date: new Date(),
        comments: '',
      });
    } else {
      this.utilityService.displayAlert('info', 'Please enter Comment');
    }
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @memberof UserCommentTableComponent
   */
  onDelete(userComment: UserComment) {
    this.delRow = this.userComments.indexOf(userComment);
    this.userComments.splice(this.delRow, 1);
    this.userCommentTable.emit(this.userComments);
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @memberof UserCommentTableComponent
   */
  onRowEditInit(userComment: UserComment) {
    this.clonedUserComments[userComment.sl] = { ...userComment };
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @memberof UserCommentTableComponent
   */
  onRowEditSave(userComment: UserComment) {
    delete this.clonedUserComments[userComment.sl];
    this.userCommentTable.emit(this.userComments);
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @param {number} index
   * @memberof UserCommentTableComponent
   */
  onRowEditCancel(userComment: UserComment, index: number) {
    this.userComments[index] = this.clonedUserComments[userComment.sl];
    delete this.clonedUserComments[userComment.sl];
  }

  /**
   *
   *
   * @memberof UserCommentTableComponent
   */
  insertUserComments() {
    if (!this.userCommentsList || this.userCommentsList.length < 1) {
      this.userComments = [
        {
          sl: 1,
          date: new Date(),
          userName: this.userName,
          comments: '',
        },
      ];
    } else {
      this.userCommentsList.forEach((element) => {
        ++this.count;
        let obj = {
          userName: element.Employee,
          sl: this.count,
          date: new Date(element.DateTime),
          comments: element.Comment,
        };
        this.userComments.push(obj);
      });
    }

    this.userCols = [
      // { field: 'sl', header: 'Sl', isStatic: true },
      { field: 'date', header: 'Date of entry' },
      { field: 'userName', header: 'User ID' },
      { field: 'comments', header: 'Comment' },
    ];
  }

  /**
   *
   *
   * @memberof UserCommentTableComponent
   */
  inserTaskComments() {
    if (this.tableFrom == 'designreview') {
      if (!this.userTaskList || this.userTaskList.length < 1) {
        this.userTask = [
          {
            sl: 1,
            component: '',
            reviewType: null,
            task: null,
            supportedReview: null,
            startDate: new Date(),
            dueDate: new Date(),
            completeDate: new Date(),
            reviewDate: new Date(),
          },
        ];
      } else {
        this.userTaskList.forEach((element) => {
          ++this.countTask;
          let obj = {
            sl: this.countTask,
            component: element.Component,
            reviewType: element.ReviewType,
            task: element.Task,
            supportedReview: element.SupportedReview,
            startDate: new Date(element.StartDate),
            dueDate: new Date(element.DueDate),
            completeDate: new Date(element.CompleteDate),
            reviewDate: new Date(element.ReviewDate),
          };
          this.userTask.push(obj);
        });
      }

      this.initDropdown();

      this.taskCols = [
        { field: 'component', header: 'Component', type: 'text' },
        {
          field: 'reviewType',
          header: 'Review Type',
          type: 'select',
          option: this.reviewType,
        },
        {
          field: 'task',
          header: 'Task',
          type: 'select',
          option: this.task,
        },
        {
          field: 'supportedReview',
          header: 'Supported Review',
          type: 'select',
          option: this.supportedReview,
        },
        { field: 'startDate', header: 'Date Start', type: 'date' },
        { field: 'dueDate', header: 'Due Date', type: 'date' },
        { field: 'completeDate', header: 'Date End', type: 'date' },
        { field: 'reviewDate', header: 'Review Date', type: 'date' },
      ];
    } else if (this.tableFrom == 'failureanalysis') {
      //To be implemented
      if (!this.userTaskList || this.userTaskList.length < 1) {
        this.userTask = [
          {
            sl: 1,
            segment: '',
            dateEnd: new Date(),
            dateStart: new Date(),
            DeliveredDate: new Date(),
            Documentation: '',
          },
        ];
      } else {
        this.userTaskList.forEach((element) => {
          ++this.countTask;
          let obj = {
            sl: this.countTask,
            segment: element.Task,
            dateStart: new Date(element.StartDate),
            dateEnd: new Date(element.CommitDate),
            DeliveredDate: new Date(element.DeliveredDate),
            Documentation: element.Documentation,
          };
          this.userTask.push(obj);
        });
      }
      //Segment dropdown value set
      this.segment = [
        { label: 'Preliminary Report', value: 'Preliminary Report' },
        { label: 'Final Report', value: 'Final Report' },
        { label: 'Report Review', value: 'Report Review' },
        { label: 'Outsourced Operation', value: 'Outsourced Operation' },
      ];
      this.taskCols = [
        { field: 'segment', header: 'Task' },
        { field: 'StartDate', header: 'Start Date' },
        { field: 'CommitDate', header: 'Commit Date' },
        { field: 'DeliveredDate', header: 'Delivered Date' },
        { field: 'Documentation', header: 'Documentation' },
      ];
    } else if (
      this.tableFrom == 'heatexchange' ||
      this.tableFrom == 'componentspecific'
    ) {
      if (!this.userTaskList || this.userTaskList.length < 1) {
        this.userTask = [
          {
            sl: 1,
            segment: '',
            dateStart: new Date(),
            dateEnd: new Date(),
          },
        ];
      } else {
        this.userTaskList.forEach((element) => {
          ++this.countTask;
          if (this.tableFrom == 'componentspecific') {
            let obj = {
              sl: this.countTask,
              segment: element.Segment,
              dateStart: new Date(element.DateStart),
              dateEnd: new Date(element.DateComplete),
            };
            this.userTask.push(obj);
          } else {
            let obj = {
              sl: this.countTask,
              segment: element.Task,
              dateStart: new Date(element.StartDate),
              dateEnd: new Date(element.EndDate),
            };
            this.userTask.push(obj);
          }
        });
      }
      //Segment dropdown value set
      if (this.tableFrom == 'heatexchange') {
        this.segment = [
          { label: 'Receiving Inspection', value: 'Receiving Inspection' },
          {
            label: 'Examine Unit and Documentation',
            value: 'Examine Unit and Documentation',
          },
          { label: 'Create Test Plan', value: 'Create Test Plan' },
          { label: 'Test Weld', value: 'Test Weld' },
          { label: 'Test Braze', value: 'Test Braze' },
          { label: 'Test Coating', value: 'Test Coating' },
          { label: 'Make Micros', value: 'Make Micros' },
          { label: 'Make Tensile Specimen', value: 'Make Tensile Specimen' },
        ];
        this.taskCols = [
          { field: 'segment', header: 'Task' },
          { field: 'dateStart', header: 'Date Start' },
          { field: 'dateEnd', header: 'Date End' },
        ];
      } else if (this.tableFrom == 'componentspecific') {
        this.segment = [
          { label: 'Test Plan', value: 'TestPlan' },
          { label: 'Testing', value: 'Testing' },
          { label: 'Report', value: 'Report' },
        ];
        this.taskCols = [
          { field: 'segment', header: 'Segment' },
          { field: 'dateStart', header: 'Date Start' },
          { field: 'dateEnd', header: 'Date End' },
        ];
      }
    }
  }

  initDropdown() {
    let reviewTypeList = [
      { Description: 'System Level', Id: 1 },
      { Description: 'HS Designed Component', Id: 2 },
      { Description: 'Supplier Designed Components', Id: 3 },
    ];
    reviewTypeList.forEach((item) => {
      let obj = {
        label: item.Description,
        value: { name: item.Description, id: item.Id },
      };
      this.reviewType.push(obj);
    });

    let supportedReviewList = [
      { Description: 'IMDR', Id: 1 },
      { Description: 'PDIR', Id: 2 },
      { Description: 'VPDR', Id: 3 },
      { Description: 'DCAR', Id: 4 },
      { Description: 'PDR', Id: 5 },
      { Description: 'P2', Id: 6 },
      { Description: 'P3', Id: 7 },
      { Description: 'FMDR', Id: 8 },
      { Description: 'VDDR', Id: 9 },
      { Description: 'CDIR', Id: 10 },
      { Description: 'CDR', Id: 11 },
      { Description: 'FDR', Id: 12 },
    ];
    supportedReviewList.forEach((item) => {
      let obj = {
        label: item.Description, value: { name: item.Description, id: item.Id }, };
      this.supportedReview.push(obj);
    });
    let reviewTaskList = [
      { Description: '2-ME-50 Perform Preliminary M&P Design Review- Subsequent Reviews', Id: 1, }, 
      { Description: '2-ME-60 Preliminary MOC Risk Assessment - Subsequent Review', Id: 2, },
      { Description: '2-ME-10 M&P Technology Readiness Review', Id: 3 },
      { Description: '2-ME-20 Establish M&P Flowdown Requirements', Id: 4 },
      { Description: '2-ME-30 Establish Preliminary Design Allowables', Id: 5 },
      { Description: '2-ME-40 Validate Material Properties for HS Design', Id: 6, }, 
      { Description: '2-ME-50 Perform Preliminary M&P Design Review- 1st Review', Id: 7, }, 
      { Description: '2-ME-60 Preliminary MOC Risk Assessment - 1st Review', Id: 8, },
      { Description: '3-ME-10 Design Review M&P Selection', Id: 9 }, 
      { Description: '3-ME-20 Validate Material Properties for Buy Components', Id: 10, }, 
      { Description: '3-ME-30 Establish Design Allowables', Id: 11 },
      { Description: '3-ME-40 Component Specific Materials Characterization', Id: 12, },
      { Description: '3-ME-50 Validate Materials Specifications', Id: 13 },
      { Description: '3-ME-60 Detail Drawing Approval', Id: 14 },
      { Description: '3-ME-70 Complete M+P Data Items', Id: 15 },
    ];
    reviewTaskList.forEach((item) => {
      let obj = {
        label: item.Description,
        value: { name: item.Description, id: item.Id },
      };
      this.task.push(obj);
    });
  }

  /**
   *
   *
   * @memberof UserCommentTableComponent
   */
  addNewRowTask() {
    //find last item of userTask & check if data entered
    this.lastRow = [];
    this.lastRow = this.userTask.length
      ? this.userTask[this.userTask.length - 1]
      : [];
    if (this.tableFrom == 'designreview') {
      if (this.lastRow.component || this.lastRow.length < 1) {
        ++this.countTask;
        this.userTask.push({
          sl: this.countTask,
          component: '',
          reviewType: null,
          task: null,
          supportedReview: null,
          startDate: new Date(),
          dueDate: new Date(),
          completeDate: new Date(),
          reviewDate: new Date(),
        });
      } else {
        this.utilityService.displayAlert('info', 'Please enter Component');
      }
    } else {
      if (this.lastRow.segment || this.lastRow.length < 1) {
        ++this.countTask;
        if (this.tableFrom == 'failureanalysis') {
          this.userTask.push({
            sl: this.countTask,
            dateStart: new Date(),
            dateEnd: new Date(),
            segment: '',
            DeliveredDate: new Date(),
            Documentation: '',
          });
        } else {
          this.userTask.push({
            sl: this.countTask,
            dateStart: new Date(),
            dateEnd: new Date(),
            segment: '',
          });
        }
      } else {
        this.utilityService.displayAlert('info', 'Please enter Task');
      }
    }
  }
  /**
   *
   *
   * @param {UserComment} userComment
   * @memberof UserCommentTableComponent
   */
  onDeleteTask(userTask) {
    this.delTaskRow = this.userTask.indexOf(userTask);
    this.userTask.splice(this.delTaskRow, 1);
    this.userTaskTable.emit(this.userTask);
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @memberof UserCommentTableComponent
   */
  onRowEditInitTask(userTask) {
    this.clonedUserTask[userTask.sl] = { ...userTask };
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @memberof UserCommentTableComponent
   */
  onRowEditSaveTask(userTask) {
    delete this.clonedUserTask[userTask.sl];
    this.userTaskTable.emit(this.userTask);
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @param {number} index
   * @memberof UserCommentTableComponent
   */
  onRowEditCancelTask(userTask, index: number) {
    this.userTask[index] = this.clonedUserTask[userTask.sl];
    delete this.clonedUserTask[userTask.sl];
  }

  /**
   *
   *
   * @memberof UserCommentTableComponent
   */
  insertUserDoc() {
    if (!this.userDocList || this.userDocList.length < 1) {
      this.userDocs = [
        { sl: 1, partNumber: '', docNote: '', MOCStatus: '', MOC: '', reviewedBy: '', },
      ];
    } else {
      this.userDocList.forEach((element) => {
        ++this.countDoc;
        let obj = {
          sl: this.countDoc,
          partNumber: element.DocumentOrPartNumber,
          docNote: element.DocumentNotes,
          MOCStatus: element.MocWorkFlowStatus,
          MOC: element.Waiver,
          reviewedBy: element.WaiverBy,
        };
        this.userDocs.push(obj);
      });
    }

    this.docCols = [
      // { field: 'sl', header: 'Sl', isStatic: true },
      { field: 'partNumber', header: 'Part Number' },
      { field: 'docNote', header: 'Document Note' },
      { field: 'MOCStatus', header: 'MOC Status' },
      { field: 'MOC', header: 'MOC' },
      { field: 'reviewedBy', header: 'Reviewed By' },
    ];
    this.reviewedBy = [
      { label: 'Shalini', value: 'Shalini' },
      { label: 'Kavya', value: 'Kavya' },
    ];
    this.MOCStatus = [
      { label: 'Approved', value: 'Approved' },
      { label: 'Rejected', value: 'Rejected' },
      { label: 'Pending', value: 'Pending' },
      { label: 'Not Required', value: 'Not Required' },
    ];
    //below for beging worked by dropdown
    this.getReviewedBy();
  }

  getReviewedBy() {
    // this.displaySpinner = true;
    this.utilityService.getResponse('getBeingWorkBy').subscribe(
      (res) => {
        // this.displaySpinner = false;
        // this.reviewedBy = res.body['Data'];
      },
      (error) => {
        // this.displaySpinner = false;
        // this.error = error.statusText;
      }
    );
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @memberof UserCommentTableComponent
   */
  onDeleteDoc(userDoc: UserDoc) {
    this.delDoc = this.userDocs.indexOf(userDoc);
    this.userDocs.splice(this.delDoc, 1);
    this.userDocTable.emit(this.userDocs);
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @memberof UserCommentTableComponent
   */
  onRowEditInitDoc(userDoc) {
    this.clonedUserDoc[userDoc.sl] = { ...userDoc };
  }

  /**
   *
   *
   * @param {UserComment} userComment
   * @memberof UserCommentTableComponent
   */
  onRowEditSaveDoc(userDoc) {
    delete this.clonedUserDoc[userDoc.sl];
    this.userDocTable.emit(this.userDocs);
  }
  /**
   *
   *
   * @param {UserComment} userComment
   * @param {number} index
   * @memberof UserCommentTableComponent
   */
  onRowEditCancelDoc(userDoc: UserDoc, index: number) {
    this.userDocs[index] = this.clonedUserDoc[userDoc.sl];
    delete this.clonedUserDoc[userDoc.sl];
  }

  /**
   *
   *
   * @memberof UserCommentTableComponent
   */
  addNewRowDoc() {
    //find last item of userTask & check if data entered
    this.lastRow = [];
    this.lastRow = this.userDocs.length
      ? this.userDocs[this.userDocs.length - 1]
      : [];
    if (this.lastRow.partNumber || this.lastRow.length < 1) {
      ++this.countDoc;
      this.userDocs.push({
        sl: this.countDoc, partNumber: '', docNote: '', MOCStatus: '', MOC: '', reviewedBy: '',
      });
    } else {
      this.utilityService.displayAlert('info', 'Please enter current row');
    }
  }
}
