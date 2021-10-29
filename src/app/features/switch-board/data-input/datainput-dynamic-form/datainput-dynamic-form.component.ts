import {Component, EventEmitter, OnInit, Input, Output, Inject,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { UtilityService } from 'src/app/services/utility.service';
import { DatePipe, DOCUMENT } from '@angular/common';
/**
 *
 *
 * @export
 * @class DatainputDynamicFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-datainput-dynamic-form',
  templateUrl: './datainput-dynamic-form.component.html',
  styleUrls: ['./datainput-dynamic-form.component.scss'],
  providers: [DatePipe],
})
export class DatainputDynamicFormComponent implements OnInit {
  tabIndex: number = 0;
  @Input() editRowData: any;
  @Input() editForm: any;
  @Output() formTitle = new EventEmitter();
  @Output() tableCols = new EventEmitter();
  @Output() tableData = new EventEmitter();
  title: string;
  pageName: string;
  createForm: FormGroup;
  displaySpinner: boolean = false;
  fieldArray: any;
  cols: any[];
  records: any;
  error: string;
  productCategory: any;
  teamID: any;
  task: any;
  statusList: any;
  reviewedBy: any;
  inputFrom: any;
  programModel: any;
  beingWorkedBy: any;
  priority: any;
  scheduledays: any;
  ansComScore: any;
  ansDataScore: any;
  investigationTypes: any;
  tableFrom: string;
  formID: any;
  validationErrMsg: string;
  userComments: any;
  userTask: any;
  userDoc: any;
  tabTextAdd: string = 'Add Form';
  tabTextEdit: string = 'Edit Form';
  userCommentsList: any;
  userTaskList: any;
  userDocList: any;
  isACScoreApplicable: boolean = true;
  isADScoreApplicable: boolean = true;
  alphaNumericPattern: string;
  alphaPattern: string;
  numericPattern: string;
  decimal: string;

  /**
   * Creates an instance of DatainputDynamicFormComponent.
   * @param {Router} router
   * @param {FormBuilder} fb
   * @param {GlobalVariableService} globalVariableService
   * @param {UtilityService} utilityService
   * @param {DatePipe} datePipe
   * @memberof DatainputDynamicFormComponent
   */
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public globalVariableService: GlobalVariableService,
    public utilityService: UtilityService,
    public datePipe: DatePipe,
    @Inject(DOCUMENT) private document: Document
  ) {}
  /**
   *
   *
   * @memberof DatainputDynamicFormComponent
   */
  ngOnInit(): void {
    this.pageName = this.router.url.split('/').pop();
    this.validationErrMsg = 'Fill all mandatory fields. \n Provide valid inputs.';
    this.alphaNumericPattern = "^$|^[A-Za-z0-9]+";
    this.alphaPattern = "^$|^[A-Za-z]+";
    this.numericPattern = "^[0-9]*$";
    this.decimal=  "$|^[.0-9]+"; 
    this.getDropdownValues();
    // this.getRecords();
    this.createFormBuilder();
  }
  /**
   *
   *
   * @param {*} ttl
   * @memberof DatainputDynamicFormComponent
   */
  setTitle(ttl) {
    // this.title = ttl;
    this.formTitle.emit(ttl);
  }
  /**
   *
   *
   * @memberof DatainputDynamicFormComponent
   */
  createFormBuilder() {
    this.userCommentsList = this.editForm ? this.editRowData.CommentsList : [];
    // this.formID = this.editForm ? this.editRowData.Id : null;
    if (this.pageName == 'mainexpand') {
      this.setTitle('Materials Engineering Expanded Workload Form');
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.BeingWorkedBy : null,
          [Validators.required],
        ],
        Priority: [this.editRowData ? this.editRowData.Priority : null],
        InputDate: [this.editRowData ? this.editRowData.InputDate : null],
        ScheduleDays: [this.editRowData ? this.editRowData.ScheduleDays : null],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        TeamTaskId: [this.editRowData ? this.editRowData.TeamTaskId : null],
        CompleteDate: [this.editRowData ? this.editRowData.CompleteDate : null],
        Requester: [this.editRowData ? this.editRowData.Requester : null, [Validators.pattern(this.alphaPattern)]],
        InputFrom: [this.editRowData ? this.editRowData.InputFrom : null],
        RequestedDueDate: [
          this.editRowData ? this.editRowData.RequestedDueDate : null,
        ],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        Task: [this.editRowData ? this.editRowData.Task : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        PartSerialNumber: [
          // this.editRowData ? this.editRowData.PartSerialNumber : null, [Validators.required],
          this.editRowData ? this.editRowData.PartSerialNumber : null, [Validators.pattern(this.alphaNumericPattern)]

        ],
        JobDescription: [
          this.editRowData ? this.editRowData.JobDescription : null,
        ],
        WpiNumber: [this.editRowData ? this.editRowData.WpiNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        WpiActive: [this.editRowData ? this.editRowData.WpiActive : null],
        HoursWorked: [this.editRowData ? this.editRowData.HoursWorked : null, [Validators.pattern(this.decimal)]],
        AnswerCompletenessScore: [
          this.editRowData ? this.editRowData.AnswerCompletenessScore : null,
        ],
        AnswerDataScore: [
          this.editRowData ? this.editRowData.AnswerDataScore : null,
        ],
        CommentsList: [this.editRowData ? this.editRowData.CommentsList : []],
        // AnswerCompletenessScoreslide:[""] // for slide
      });
      this.fieldArray = [
        [
          { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy, mandatory: true }, 
          { label: 'Priority', type: 'select', control: 'Priority', options: this.priority, mandatory: false  }, 
          { label: 'Input Date', type: 'date', control: 'InputDate' }, 
          { label: 'Schedule Days', type: 'select', control: 'ScheduleDays', options: this.scheduledays, }, 
          { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate', }, 
          { label: 'Team ID', type: 'select', control: 'TeamTaskId', options: this.teamID, }, 
          { label: 'Work Complete Date', type: 'date', control: 'CompleteDate', },
        ],
        [
          { label: 'Requester', type: 'text', control: 'Requester',  maxlen: 49},
          { label: 'Input From', type: 'select', control: 'InputFrom', options: this.inputFrom, }, 
          { label: 'Req. Compl. Date', type: 'date', control: 'RequestedDueDate', }, 
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Program or Model #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, }, 
          { label: 'Part Number', type: 'text', control: 'PartNumber',  maxlen: 49 }, 
          { label: 'Task', type: 'select', control: 'Task', options: this.task, }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, }, 
          // { label: 'Serial Number', type: 'text', control: 'PartSerialNumber',mandatory: true,  maxlen: 50}, 
          { label: 'Serial Number', type: 'text', control: 'PartSerialNumber',  maxlen: 49}, 

          { label: 'Job Description', type: 'textarea', control: 'JobDescription', },
        ],
        [
          { label: 'WPI Number', type: 'text', control: 'WpiNumber',  maxlen: 24 },
          { label: 'WPI Active', type: 'select', control: 'WpiActive',
           options: [ { Id: true, Description: 'Yes' }, { Id: false, Description: 'No' }, ],
           }, 
           { label: 'Number Of Hours Worked', type: 'text', control: 'HoursWorked', maxlen: 5 },
        ],
        [
          // { label: 'Answer Completeness Score', type: 'slide', control: 'AnswerCompletenessScoreslide', cardTitle: 'Quality Ratings'}, // code for slide
          { label: 'Answer Completeness Score', type: 'select', control: 'AnswerCompletenessScore', options: this.ansComScore}, 
          // { label: 'Answer Data Score', type: 'slide', control: 'AnswerDataScoreslide',  value: this.isADScoreApplicable }, // code for slide
          { label: 'Answer Data Score', type: 'select', control: 'AnswerDataScore', options: this.ansDataScore, },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedByName', header: 'Being Worked By' },
        { field: 'Requester', header: 'Requested By' },
        { field: 'InputDate', header: 'Input Date' },
        { field: 'RequestedDueDate', header: 'Due Date' },
        { field: 'StatusName', header: 'Status' },        
      ];
    } else if (this.pageName == 'drawingreview') {
      this.setTitle('Product Support Team Drawing Review(Open Jobs)');
      // this.DrawingReviewDocumentsList=  this.userDocList 
      this.userDocList = this.editForm ? this.editRowData.DrawingReviewDocumentsList : [];
      this.createForm = this.fb.group({
        CrNumber: [
          this.editRowData ? this.editRowData.CrNumber : null,
          [Validators.required],
        ],
        WorkInDueDate: [
          this.editRowData ? this.editRowData.WorkInDueDate : null,
        ],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        HoursWorked: [this.editRowData ? this.editRowData.HoursWorked : null, [Validators.pattern(this.decimal)]],
        CompleteDate: [this.editRowData ? this.editRowData.CompleteDate : null],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        PointOfContact: [
          this.editRowData ? this.editRowData.PointOfContact : null,
        ],
        ReviewedBy: [this.editRowData ? this.editRowData.ReviewedBy : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        ChargeNumber: [this.editRowData ? this.editRowData.ChargeNumber : null],
        JobDescription: [
          this.editRowData ? this.editRowData.JobDescription : null,
        ],
        CommentsList: [this.editRowData ? this.editRowData.CommentsList : []],
        DrawingReviewDocumentsList: [this.editRowData ? this.editRowData.DrawingReviewDocumentsList : []],
      });
      this.fieldArray = [
        [
          { label: 'CR Number', type: 'text', control: 'CrNumber',mandatory: true, maxlen: 24},
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Work in Queue Date', type: 'date', control: 'WorkInDueDate', }, 
          { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate', }, 
          { label: 'Point Of Contact', type: 'text', control: 'PointOfContact',  maxlen: 49},
          { label: 'Number Of Hours Worked', type: 'text', control: 'HoursWorked', maxlen: 5}, 
          { label: 'Reviewed By', type: 'select', control: 'ReviewedBy', options: this.reviewedBy, },
          { label: 'Complete Date', type: 'date', control: 'CompleteDate' },
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, },
          { label: 'Charge Number', type: 'text', control: 'ChargeNumber', maxlen: 24 },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'CrNumber', header: 'CR Number' },
        { field: 'WorkStartDate', header: 'Start Date' },
        { field: 'CompleteDate', header: 'Complete Date' },
        { field: 'StatusName', header: 'Status' },     
      ];
    } else if (this.pageName == 'designreview') {
      this.setTitle('Design Review For Materials and Process');
      this.userTaskList = this.editForm ? this.editRowData.DesignReviewTasksList : [];
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.BeingWorkedBy : null,
          [Validators.required],
        ],
        WorkStartDate: [this.editRowData ? this.editRowData.WorkStartDate : null],
        CompleteDate: [this.editRowData ? this.editRowData.CompleteDate : null],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        Status: [this.editRowData ? this.editRowData.Status : null],
        ComponentName: [
          this.editRowData ? this.editRowData.ComponentName : null,
        ],
        ComponentType: [
          this.editRowData ? this.editRowData.ComponentType : null,
        ],
        PreliminaryDesignMapNumber: [
          this.editRowData ? this.editRowData.PreliminaryDesignMapNumber : null,
        ],
        PreliminaryDesignMapName: [
          this.editRowData ? this.editRowData.PreliminaryDesignMapName : null,
        ],
        DetailDesignMapNumber: [
          this.editRowData ? this.editRowData.DetailDesignMapNumber : null,
        ],
        DetailDesignMapName: [
          this.editRowData ? this.editRowData.DetailDesignMapName : null,
        ],
        CommentsList: [this.editRowData ? this.editRowData.CommentsList : []],
        DesignReviewTasksList: [this.editRowData ? this.editRowData.DesignReviewTasksList : []]
      });
      this.fieldArray = [
        [
          { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy,mandatory: true }, 
          { label: 'Work StartDate', type: 'date', control: 'WorkStartDate' }, 
          { label: 'Complete Date', type: 'date', control: 'CompleteDate' }, 
          { label: 'ProductCategory', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Program or Model Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, },
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, },
          { label: 'Component Name', type: 'text', control: 'ComponentName', maxlen: 50 },
          { label: 'Component Type', type: 'select', control: 'ComponentType', options: [{Id: 'Make', Description: 'Make'},{Id: 'Buy', Description: 'Buy'}] }
        ],
        [
          { label: 'Preliminary Design Map Number', type: 'text', control: 'PreliminaryDesignMapNumber', cardTitle: 'Tasks', maxlen: 255},
          { label: 'Preliminary Design Map Name', type: 'text', control: 'PreliminaryDesignMapName', maxlen: 255},
          { label: 'Detail Design Map Number', type: 'text', control: 'DetailDesignMapNumber', maxlen: 255},
          { label: 'Detail Design Map Name', type: 'text', control: 'DetailDesignMapNumber', maxlen: 255},
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedByName', header: 'Worked By' },
        { field: 'StatusName', header: 'Status' }, 
        { field: 'WorkStartDate', header: 'Start Date' },
        { field: 'CompleteDate', header: 'Complete Date' },       

      ];
    } else if (this.pageName == 'failureanalysis') {
      this.setTitle('Material Engineering Failure Analysis Workload Form');
      this.userTaskList = this.editForm ? this.editRowData.FailureAnalysisDocumentsList : [];
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.BeingWorkedBy : null,
          [Validators.required],
        ],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        WorkCompleteDate: [this.editRowData ? this.editRowData.WorkCompleteDate : null],
        // InputFrom: [this.editRowData ? this.editRowData.InputFrom : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        Requestor: [this.editRowData ? this.editRowData.Requestor : null, [Validators.pattern(this.alphaPattern)]],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        SerialNumber: [
          this.editRowData ? this.editRowData.SerialNumber : null, [Validators.pattern(this.alphaNumericPattern)]
        ],
        AssemblyPartNumber: [
          this.editRowData ? this.editRowData.AssemblyPartNumber : null, [Validators.pattern(this.alphaNumericPattern)]
        ],
        Subject: [this.editRowData ? this.editRowData.Subject : null],
        HardwareHistory: [
          this.editRowData ? this.editRowData.HardwareHistory : null,
        ],
        InvestigationType: [this.editRowData ? this.editRowData.InvestigationType : null],
        WpiActive: [this.editRowData ? this.editRowData.WpiActive : null],
        WpiNumber: [this.editRowData ? this.editRowData.WpiNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        InvestigationTypes: [
          this.editRowData ? this.editRowData.InvestigationTypes : null,
        ],
        CommentsList: [this.editRowData ? this.editRowData.CommentsList : []],
        FailureAnalysisDocumentsList: [this.editRowData ? this.editRowData.FailureAnalysisDocumentsList : []]
     
      });
      this.fieldArray = [
        [
          { label: 'BeingWorkedBy', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy,mandatory: true }, 
          { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate', }, 
          { label: 'Work Complete Date', type: 'date', control: 'WorkCompleteDate' }, 
          // { label: 'Customer Input', type: 'select', control: 'InputFrom', options: this.inputFrom, }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, },
        ],
        [
          { label: 'Requestor', type: 'text', control: 'Requestor',  maxlen: 50 },
          { label: 'ProductCategory', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Program Model or Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, }, 
          { label: 'Part Number', type: 'text', control: 'PartNumber',  maxlen: 50 }, 
          { label: 'Serial Number', type: 'text', control: 'SerialNumber',  maxlen: 50 }, 
          { label: 'Assembly PartNumber', type: 'text', control: 'AssemblyPartNumber', }, 
          { label: 'Subject', type: 'textarea', control: 'Subject' }, 
          { label: 'HardwareHistory', type: 'textarea', control: 'HardwareHistory', },
        ],
        [
          { label: 'Investigation Type', type: 'select', control: 'InvestigationType', options: this.investigationTypes, },
          { label: 'WPI Number', type: 'text', control: 'WpiNumber',  maxlen: 25 },
          { label: 'WPI Active', type: 'select', control: 'WpiActive', options: [ { Id: true, Description: 'Yes' }, { Id: false, Description: 'No' }, ], },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedByName', header: 'Worked By' },
        { field: 'StatusName', header: 'Status' },
        { field: 'WorkStartDate', header: 'Start Date' },
        { field: 'WorkCompleteDate', header: 'Complete Date' },
      ];
    } else if (this.pageName == 'metallicdesign') {
      this.setTitle('Material Engineering Metallic Design Limits Workload Form');
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.BeingWorkedBy : null,
          [Validators.required],
        ],
        InputDate: [this.editRowData ? this.editRowData.InputDate : null],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        WorkCompleteDate: [this.editRowData ? this.editRowData.WorkCompleteDate : null],
        // InputFrom: [this.editRowData ? this.editRowData.InputFrom : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        Requestor: [this.editRowData ? this.editRowData.Requestor : null, [Validators.pattern(this.alphaPattern)]],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        WpiNumber: [this.editRowData ? this.editRowData.WpiNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        Subject: [this.editRowData ? this.editRowData.Subject : null],
      });
      this.fieldArray = [
        [
          { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy,mandatory: true },
          { label: 'Input Date', type: 'date', control: 'InputDate' },
          { label: 'Work Start Date', type: 'date', control: 'WorkStartDate' },
          { label: 'Complete Date', type: 'date', control: 'WorkCompleteDate' },
          // { label: 'Customer Input', type: 'select', control: 'InputFrom', options: this.inputFrom, },
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, },
        ],
        [
          { label: 'Requestor', type: 'text', control: 'Requestor', maxlen: 50 },
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Program Model or Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, },
          { label: 'PartNumber', type: 'text', control: 'PartNumber' },
          { label: 'WPI Number', type: 'text', control: 'WpiNumber',  maxlen: 25 },
          { label: 'Subject', type: 'textarea', control: 'Subject' },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedByName', header: 'Worked By' },
        { field: 'StatusName', header: 'Status' },
        { field: 'Requestor', header: 'Requestor' },
        { field: 'WorkStartDate', header: 'Start Date' },
        { field: 'WorkCompleteDate', header: 'Complete Date' },
      ];
    } else if (this.pageName == 'heatexchange') {
      this.setTitle('Material Engineering Hex Workload Form');
      this.userTaskList = this.editForm ? this.editRowData.HeatExchangerTaskList : [];
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.BeingWorkedBy : null,
          [Validators.required],
        ],
        WorkInQueueDate: [
          this.editRowData ? this.editRowData.WorkInQueueDate : null,
        ],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        WorkCompleteDate: [this.editRowData ? this.editRowData.WorkCompleteDate : null],
        Priority: [this.editRowData ? this.editRowData.Priority : null],
        ScheduleDays: [this.editRowData ? this.editRowData.ScheduleDays : null],
        Team: [this.editRowData ? this.editRowData.Team : null],
        Requestor: [this.editRowData ? this.editRowData.Requestor : null, [Validators.pattern(this.alphaPattern)]],
        RequestorCompleteDate: [
          this.editRowData ? this.editRowData.RequestorCompleteDate : null,
        ],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        SerialNumber: [
          this.editRowData ? this.editRowData.SerialNumber : null, [Validators.pattern(this.alphaNumericPattern)]
        ],
        InputFrom: [this.editRowData ? this.editRowData.InputFrom : null],
        JobDescription: [
          this.editRowData ? this.editRowData.JobDescription : null,
        ],
        Task: [this.editRowData ? this.editRowData.Task : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        WpiActive: [this.editRowData ? this.editRowData.WpiActive : null],
        WpiNumber: [this.editRowData ? this.editRowData.WpiNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        HoursWorked: [this.editRowData ? this.editRowData.HoursWorked : null, [Validators.pattern(this.decimal)]],
        CommentsList: [this.editRowData ? this.editRowData.CommentsList : []],
        HeatExchangerTaskList: [this.editRowData ? this.editRowData.HeatExchangerTaskList : []]
      });
      this.fieldArray = [
        [
          { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy,mandatory: true }, 
          { label: 'Work In Queue Date', type: 'date', control: 'WorkInQueueDate', }, 
          { label: 'Work Start Date', type: 'date', control: 'WorkStartDate' }, 
          { label: 'Work Complete Date', type: 'date', control: 'WorkCompleteDate', }, 
          { label: 'Priority', type: 'select', control: 'Priority', options: this.priority, }, 
          { label: 'Schedule Days', type: 'select', control: 'ScheduleDays', options: this.scheduledays, }, 
          { label: 'Team ID', type: 'select', control: 'Team', options: this.teamID, },
        ],
        [
          { label: 'Requestor', type: 'text', control: 'Requestor', maxlen: 50 },
          { label: 'Req. Compl. Date', type: 'date', control: 'RequestorCompleteDate', }, 
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Program Model or Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, },
          { label: 'Part Number', type: 'text', control: 'PartNumber', maxlen: 50},
          { label: 'Serial Number', type: 'text', control: 'SerialNumber', maxlen: 50 },
          { label: 'Input From', type: 'select', control: 'InputFrom', options: this.inputFrom, }, 
          { label: 'Task', type: 'select', control: 'Task', options: this.task, }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, }, 
          { label: 'Job Description', type: 'textarea', control: 'JobDescription', },
        ],
        [
          { label: 'WPI Number', type: 'text', control: 'WpiNumber',  maxlen: 25 },
          { label: 'WPI Active', type: 'select', control: 'WpiActive', options: [ { Id: true, Description: 'Yes' }, { Id: false, Description: 'No' }, ], },
          { label: 'Number Of Hours Worked', type: 'text', control: 'HoursWorked', maxlen: 5 },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedByName', header: 'Worked By' },
        { field: 'WorkStartDate', header: 'Start Date' },
        { field: 'WorkCompleteDate', header: 'Complete Date' },
        { field: 'Requestor', header: 'Requestor' },
      ];
    } else if (this.pageName == 'componentspecific') {
      this.setTitle('Material Engineering Component Specific Workload Form');
      this.userTaskList = this.editForm ? this.editRowData.ComponentSpecificTasksList : [];
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.BeingWorkedBy : null,
          [Validators.required],
        ],
        Requestor: [this.editRowData ? this.editRowData.Requestor : null, [Validators.pattern(this.alphaPattern)]],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        WorkCompleteDate: [this.editRowData ? this.editRowData.WorkCompleteDate : null],
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        JobDescription: [this.editRowData ? this.editRowData.JobDescription : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        WpiNumber: [this.editRowData ? this.editRowData.WpiNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        WorkInQueueDate: [this.editRowData ? this.editRowData.WorkInQueueDate : null],        
        // ScheduleDays: [this.editRowData ? this.editRowData.ScheduleDays : null],
        // WorkInDueDate: [
        //   this.editRowData ? this.editRowData.WorkInDueDate : null,
        // ],
        CommentsList: [this.editRowData ? this.editRowData.CommentsList : []],
        ComponentSpecificTasksList: [this.editRowData ? this.editRowData.ComponentSpecificTasksList : []]
      });
      this.fieldArray = [
        [
          { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy, mandatory: true},
          { label: 'Requestor', type: 'text', control: 'Requestor',  maxlen: 50 },
          { label: 'Work In QueueDate', type: 'date', control: 'WorkInQueueDate' },
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Work Start Date', type: 'date', control: 'WorkStartDate' },
          { label: 'Program Model or Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, }, 
          { label: 'Work Complete Date', type: 'date', control: 'WorkCompleteDate', },
          { label: 'Part Number', type: 'text', control: 'PartNumber',  maxlen: 50 },
          { label: 'Job Description', type: 'textarea', control: 'JobDescription', }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, },
          { label: 'WPI Number', type: 'text', control: 'WpiNumber',  maxlen: 25 },
          // { label: 'Comments', type: 'textarea', control: 'Comments', },
          // { label: 'Component Type', type: 'select', control: 'ComponentType',
          //   options: [
          //     { Id: 1, Description: 'Make' },
          //     { Id: 2, Description: 'Buy' },
          //   ],
          // },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedByName', header: 'Worked By' },
        { field: 'Requestor', header: 'Requested By' },
        { field: 'WorkStartDate', header: 'Start Date' },
        { field: 'WorkCompleteDate', header: 'Complete Date' },
        { field: 'StatusName', header: 'Status' }, 
      ];
    } else if (this.pageName == 'supplierrequest') {
      this.setTitle('Supplier Request For Information');
      this.createForm = this.fb.group({
        SriNumber: [
          this.editRowData ? this.editRowData.SriNumber : null,
          [Validators.required, Validators.maxLength(25)],
        ],
        WorkSubmitted: [this.editRowData ? this.editRowData.WorkSubmitted : null],
        HoursWorked: [this.editRowData ? this.editRowData.HoursWorked : null, [Validators.pattern(this.decimal)]],
        CompleteDate: [this.editRowData ? this.editRowData.CompleteDate : null],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ReviewedBy: [this.editRowData ? this.editRowData.ReviewedBy : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        EcNumber: [this.editRowData ? this.editRowData.EcNumber : null],
        SriComments: [this.editRowData ? this.editRowData.SriComments : null],
        EcRequired: [this.editRowData ? this.editRowData.EcRequired : null],
        CommentsList: [this.editRowData ? this.editRowData.CommentsList : []],
      });
      this.fieldArray = [
        [
          { label: 'SRI Number', type: 'text', control: 'SriNumber',mandatory: true, maxlen: 5 },
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Work Submitted Date', type: 'date', control: 'WorkSubmitted', }, 
          { label: 'Reviewed By', type: 'select', control: 'ReviewedBy', options: this.reviewedBy, }, 
          { label: 'Number Of Hours Worked', type: 'text', control: 'HoursWorked', maxlen: 5},
          { label: 'Complete Date', type: 'date', control: 'CompleteDate' },
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, },
          { label: 'EC Required', type: 'check', control: 'EcRequired' },
          { label: 'EC Number', type: 'text', control: 'EcNumber', maxlen: 255 },
          { label: 'SRI Response', type: 'textarea', control: 'SriComments' },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'SriNumber', header: 'SRI Number' },
        { field: 'ReviewedByName', header: 'Reviewed By' },
        { field: 'WorkSubmitted', header: 'Submitted Date' },
        { field: 'CompleteDate', header: 'Complete Date' },
      ];
    } else if (this.pageName == 'specification') {
      this.setTitle('Specifications');
      this.createForm = this.fb.group({
        CrNumber: [
          this.editRowData ? this.editRowData.CrNumber : null,
          [Validators.required],
        ],
        HoursWorked: [this.editRowData ? this.editRowData.HoursWorked : null, [Validators.pattern(this.decimal)]],
        ChargeNumber: [this.editRowData ? this.editRowData.ChargeNumber : null],
        Task: [this.editRowData ? this.editRowData.Task : null],
        TeamTaskID: [this.editRowData ? this.editRowData.TeamTaskId : null],
        ReviewedBy: [this.editRowData ? this.editRowData.ReviewedBy : null],
        Requester: [this.editRowData ? this.editRowData.requester : null, [Validators.pattern(this.alphaPattern)]],
        InputDate: [this.editRowData ? this.editRowData.InputDate : null],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        CompleteDate: [this.editRowData ? this.editRowData.CompleteDate : null],
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null, [Validators.pattern(this.alphaNumericPattern)]],
        Status: [this.editRowData ? this.editRowData.Status : null],
        JobDescription: [
          this.editRowData ? this.editRowData.JobDescription : null,
        ],
      });
      this.fieldArray = [
        [
          { label: 'CR Number', type: 'text', control: 'CrNumber', mandatory: true ,maxlen: 24}, 
          { label: 'Number Of HoursWorked', type: 'text', control: 'HoursWorked', maxlen: 5}, 
          { label: 'Work in Queue Date', type: 'date', control: 'WorkInQueueDate', }, 
          { label: 'Charge Number', type: 'select', control: 'ChargeNumber', options: this.statusList, }, 
          { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate', },
          { label: 'Complete Date', type: 'date', control: 'CompleteDate' },
          { label: 'Part Number', type: 'text', control: 'ProgramNumber' },
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'Worked By' },
        { field: 'Status', header: 'Status' },
      ];
    }
    this.tableCols.emit(this.cols);
  }
  /**
   *
   *
   * @memberof SearchDynamicFormComponent
   */
  getDropdownValues() {
    this.productCategory = this.globalVariableService.getProductCategoryDD();
    this.teamID = this.globalVariableService.getTeamIdDD();
    this.task = this.globalVariableService.getTaskDD();
    this.statusList = this.globalVariableService.getStatusDD();
    this.reviewedBy = this.globalVariableService.getBeingWorkedByDD();
    this.inputFrom = this.globalVariableService.getInputFromDD();
    this.programModel = this.globalVariableService.getProgramModelDD();
    this.beingWorkedBy = this.globalVariableService.getBeingWorkedByDD();
    this.priority = this.globalVariableService.getPriorityDD();
    this.scheduledays = this.globalVariableService.getScheduledDaysDD();
    this.ansComScore = this.globalVariableService.getAnsComScoreDD();
    this.ansDataScore = this.globalVariableService.getAnsDataScoreDD();
    this.investigationTypes = [
      { Description: 'Metallic Failure', Id: 1 },
      { Description: 'Wear Analysis', Id: 2 },
      { Description: 'Debris Analysis', Id: 3 },
      { Description: 'Non-Metallic Failure', Id: 4 },
      { Description: 'Metallic General Services', Id: 5 },
      { Description: 'Non-Metallic General Services', Id: 6 },
    ];
  }
  /**
   *
   *
   * @memberof DatainputDynamicFormComponent
   */
  getRecords() {
    this.utilityService.getResponse('get' + this.pageName).subscribe(
      (res) => {
        this.records = res.body['Data'];
        this.tableData.emit(this.records);
      },
      (error) => {
        this.error = error.statusText;
      }
    );
  }
  /**
   *
   *
   * @param {*} date
   * @return {*}
   * @memberof DatainputDynamicFormComponent
   */
  convertToYYMMDD(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  /**
   *
   *
   * @memberof DatainputDynamicFormComponent
   */
  saveForm() {
    if (this.editForm) {
      this.formID = this.editRowData.Id;
      this.userCommentsList = [];
      this.userTaskList = [];
      this.userDocList = [];
    }
    if (this.createForm.valid) {
      const newData = this.createForm.value;

      //convert user input date to YYMMDD formate
      this.fieldArray.forEach(card => {
        card.forEach(field => {
        if(field.type == 'date'){
          if(newData.hasOwnProperty(field.control)){
            newData[field.control] = this.convertToYYMMDD(newData[field.control]);
          }
        }
        });
      });

      //Create CommentsList request object - From ptable usercomment 
      if (this.userComments) {
        newData.CommentsList = [];
        this.userComments.forEach((element) => {
          let userCommentsObj = {
            DateTime:  new Date(),
            Employee: element.userName,
            Comment: element.comments,
          };
          newData.CommentsList.push(userCommentsObj);
        });
      }

      if (this.userDoc) {
        newData.DrawingReviewDocumentsList = [];
        this.userDoc.forEach((element) => {
          let userDocsObj = {
            DocumentOrPartNumber: element.partNumber,
            DocumentNotes: element.docNote,
            MocWorkFlowStatus: element.MOCStatus,
            Waiver: element.MOC,
            WaiverBy: element.reviewedBy,
          };
          newData.DrawingReviewDocumentsList.push(userDocsObj);
        });
      }

      //Create TaskList request object - From ptable usertask
      if (this.userTask) {
        if(this.pageName == 'designreview'){
          newData.DesignReviewTasksList = [];
          this.userTask.forEach((element) => {
            let userTaskObj = {
              Component: element.component,
              ReviewType: element.reviewType.id,
              Task: element.task.id,
              SupportedReview: element.supportedReview.id,
              StartDate: this.convertToYYMMDD(element.startDate),
              DueDate: this.convertToYYMMDD(element.dueDate),
              CompleteDate: this.convertToYYMMDD(element.completeDate),
              ReviewDate: this.convertToYYMMDD(element.reviewDate)
            };
            newData.DesignReviewTasksList.push(userTaskObj);
          });
        }
        if(this.pageName == 'failureanalysis'){
          newData.FailureAnalysisDocumentsList = [];
          this.userTask.forEach((element) => {
            let userTaskObj = {
              Task: element.segment,
              StartDate: this.convertToYYMMDD(element.dateStart),
              CommitDate:  this.convertToYYMMDD(element.dateEnd),
              DeliveredDate:this.convertToYYMMDD(element.DeliveredDate),
              Documentation:element.Documentation,
            };
            newData.FailureAnalysisDocumentsList.push(userTaskObj);
          });
        }
        if(this.pageName == 'heatexchange'){
          newData.HeatExchangerTaskList = [];
          this.userTask.forEach((element) => {
            let userTaskObj = {
              Task: element.segment,
              StartDate: this.convertToYYMMDD(element.dateStart),
              EndDate:  this.convertToYYMMDD(element.dateEnd)
            };
            newData.HeatExchangerTaskList.push(userTaskObj);
          });
        }
        if(this.pageName == 'componentspecific'){
          newData.ComponentSpecificTasksList = [];
          this.userTask.forEach((element) => {
            let userTaskObj = {
              Segment:  element.segment,
              DateStart: this.convertToYYMMDD(element.dateStart),
              DateComplete: this.convertToYYMMDD(element.dateEnd),
            };
            newData.ComponentSpecificTasksList.push(userTaskObj);
          });
        }
      }

      if (this.createForm.valid){
      //Form Valid. Calling Save API
      let api, successMsg;
      if (this.formID) {
        newData.Id = this.formID;
        api = this.utilityService.updateRequest(
          this.createForm.value,          
          this.formID,
          'update' + this.pageName
        );
        successMsg = 'You have updated for  work ID :' + this.formID;
      } else {
        api = this.utilityService.addRequest(
          this.createForm.value,
          'add' + this.pageName
        );
      }

      this.displaySpinner = true;
      api.subscribe(
        (res) => {
          this.displaySpinner = false;
          if (!this.formID) {
            successMsg = 'You have created  Request ID :' + res['Data'].Id;
          }
          // this.formID = res['Data'].Id;
         
            this.utilityService.removeValidators(this.createForm);
            // this.utilityService.displayAlert('success', successMsg);
            this.changeLocation(successMsg);
          
         // if (this.editForm) {
           // this.document.location.reload(); // refresh page after submit , performance imporovement
         // }
        },
        (error) => {
          this.displaySpinner = false;
          this.error = error.statusText;
          this.utilityService.displayAlert('error', this.error);
        }
      );
    }

    } else {
      this.utilityService.displayAlert('error', this.validationErrMsg);
    }
  }
  /**
   *
   *
   * @param {*} event
   * @memberof DatainputDynamicFormComponent
   */
  receiveUserComment(event) {
    this.userComments = event;
  }
   /**
   *
   *
   * @param {*} event
   * @memberof DatainputDynamicFormComponent
   */
  receiveUserTask(event) {
    this.userTask = event;
  }
   /**
   *
   *
   * @param {*} event
   * @memberof DatainputDynamicFormComponent
   */
  receiveUserDoc(event) {
    this.userDoc = event;
  }
  /**
   *
   *
   * @memberof DatainputDynamicFormComponent
   */
  close() {
    this.router.navigate(['home/switchboard/']);
  }

  changeLocation(msg) {
  this.displaySpinner = true;
    // save current route first
    const currentRoute = this.router.url;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
        this.displaySpinner = false;
    }); 
    setTimeout(() => {
      this.utilityService.displayAlert('success', msg);
    }, 500);
  }

}
