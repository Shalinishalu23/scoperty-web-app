import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { UtilityService } from 'src/app/services/utility.service';
import { DatePipe } from '@angular/common';
import { mainExpandModel } from 'src/app/shared/models/datainput-model';

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
  title: string;
  pageName: string;
  createForm: FormGroup;
  displaySpinner: boolean = false;
  fieldArray: any;
  cols: any[];
  records: any; // make this as mainexpandmodel
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
  // from: any;
  formID: any;
  validationErrMsg: string = 'Please fill all mandatory fields';
  userComments: any;
  tabTextAdd : string = 'Add Forms';
  tabTextEdit : string = 'Edit Forms';

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public globalVariableService: GlobalVariableService,
    public utilityService: UtilityService,
    public datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.pageName = this.router.url.split('/').pop();
    this.getDropdownValues();
    this.createFormBuilder();
    this.getRecords();
  }

  setTitle(ttl){
    this.title = ttl;
  }

  createFormBuilder() {
    if (this.pageName == 'mainexpand') {
      this.setTitle('Materials Engineering Expanded Workload Form');
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.beingWorkedBy : null,
          [Validators.required],
        ],
        Priority: [this.editRowData ? this.editRowData.Priority : null],
        InputDate: [this.editRowData ? this.editRowData.InputDate : null],
        ScheduleDays: [this.editRowData ? this.editRowData.ScheduleDays : null],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        TeamTaskID: [this.editRowData ? this.editRowData.TeamTaskId : null],
        CompleteDate: [this.editRowData ? this.editRowData.CompleteDate : null],
        Requester: [this.editRowData ? this.editRowData.Requester : null],
        InputFrom: [this.editRowData ? this.editRowData.InputDate : null],
        RequestedDueDate: [
          this.editRowData ? this.editRowData.RequestedDueDate : null,
        ],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null],
        Task: [this.editRowData ? this.editRowData.Task : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        PartSerialNumber: [
          this.editRowData ? this.editRowData.PartSerialNumber : null,
        ],
        JobDescription: [
          this.editRowData ? this.editRowData.JobDescription : null,
        ],
        WpiNumber: [this.editRowData ? this.editRowData.WpiNumber : null],
        WpiActive: [this.editRowData ? this.editRowData.WpiActive : null],
        HoursWorked: [this.editRowData ? this.editRowData.HoursWorked : null],
        AnswerCompletenessScore: [
          this.editRowData ? this.editRowData.AnswerCompletenessScore : null,
        ],
        AnswerDataScore: [
          this.editRowData ? this.editRowData.AnswerDataScore : null,
        ],
        CommentsList: [this.editRowData ? this.editRowData.CommentsList : []],
        // Comments: '',
      });
      this.fieldArray = [
        [
          { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy, }, 
          { label: 'Priority', type: 'select', control: 'Priority', options: this.priority, }, 
          { label: 'Input Date', type: 'date', control: 'InputDate', }, 
          { label: 'Schedule Days', type: 'select', control: 'ScheduleDays', options: this.scheduledays, }, 
          { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate', }, 
          { label: 'Team ID', type: 'select', control: 'TeamTaskID', options: this.teamID, }, 
          { label: 'Work Complete Date', type: 'date', control: 'CompleteDate', }, 
        ], 
        [ 
          { label: 'Requester', type: 'text', control: 'Requester', }, 
          { label: 'Input From', type: 'select', control: 'InputFrom', options: this.inputFrom, }, 
          { label: 'Req. Compl. Date', type: 'date', control: 'RequestedDueDate', }, 
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Program or Model #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, }, 
          { label: 'Part Number', type: 'text', control: 'PartNumber', }, 
          { label: 'Task', type: 'select', control: 'Task', options: this.task, }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, }, 
          { label: 'Serial Number', type: 'text', control: 'PartSerialNumber', }, 
          { label: 'Job Description', type: 'textarea', control: 'JobDescription', },
        ],
        [
          { label: 'Wpi Number', type: 'text', control: 'WpiNumber', }, 
          { label: 'Wpi Active', type: 'select', control: 'WpiActive', options: [ { Id: 1, Description: 'Yes' }, { Id: 2, Description: 'No' }, ] }, 
          { label: 'Number Of Hours Worked', type: 'number', control: 'HoursWorked', }, 
        ], 
        [ 
          { label: 'Answer Completeness Score', type: 'select', control: 'AnswerCompletenessScore', options: this.ansComScore, }, 
          { label: 'Answer Data Score', type: 'select', control: 'AnswerDataScore', options: this.ansDataScore, },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'Being Worked By' },
        { field: 'Requester', header: 'Requested By' },
        { field: 'TeamTaskId', header: 'Team ID' },
        { field: 'RequestedDueDate', header: 'Due Date' },
      ];
    } else if (this.pageName == 'drawingreview') {
      this.setTitle('Product Support Team Drawing Review(Open Jobs)');
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
        HoursWorked: [this.editRowData ? this.editRowData.HoursWorked : null],
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
      });
      this.fieldArray = [
        [
          { label: 'CR Number', type: 'text', control: 'CrNumber', }, 
          { label: ' Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Work in Queue Date', type: 'date', control: 'WorkInDueDate', }, 
          { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate', }, 
          { label: 'Point Of Contact', type: 'text', control: 'PointOfContact', }, 
          { label: 'Number Of Hours Worked', type: 'number', control: 'HoursWorked', }, 
          { label: 'Reviewed By', type: 'select', control: 'ReviewedBy', options: this.reviewedBy, }, 
          { label: 'Complete Date', type: 'date', control: 'CompleteDate', }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, }, 
          { label: 'Charge Number', type: 'text', control: 'ChargeNumber', },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'designreview') {
      this.title = 'Design Review For Materials and Process';
      this.createForm = this.fb.group({
        BeingWorkedBy: [this.editRowData ? this.editRowData.beingWorkedBy : null, [Validators.required]],
        Priority: [this.editRowData ? this.editRowData.Priority : null],
        InputDate: [this.editRowData ? this.editRowData.InputDate : null],
        ScheduleDays: [this.editRowData ? this.editRowData.ScheduleDays : null],
        WorkInDueDate: [
          this.editRowData ? this.editRowData.WorkInDueDate : null,
        ],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ComponentName: [
          this.editRowData ? this.editRowData.ComponentName : null,
        ],
        ComponentType: [
          this.editRowData ? this.editRowData.ComponentType : null,
        ],
      });
      this.fieldArray = [
        [
          { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy, }, 
          { label: 'Priority', type: 'select', control: 'Priority', options: this.priority, }, 
          { label: 'Work in Queue Date', type: 'date', control: 'WorkInDueDate', }, 
          { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate', }, 
          { label: 'Work Complete Date', type: 'date', control: 'CompleteDate', }, 
          { label: ' Requester', type: 'text', control: 'Requester', }, 
          { label: 'ProductCategory', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Program or Model Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, }, 
          { label: 'Part Number', type: 'text', control: 'PartNumber', }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, },
        ],
        [
          { label: 'Wpi Number', type: 'text', control: 'WpiNumber'}
        ]
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'failureanalysis') {
      this.title = 'Material Engineering Failure Analysis Workload Form';
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.beingWorkedBy : null,
          [Validators.required],
        ],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        CompleteDate: [this.editRowData ? this.editRowData.CompleteDate : null],
        InputFrom: [this.editRowData ? this.editRowData.InputFrom : null],
        Status: [this.editRowData ? this.editRowData.Status : null],

        Requester: [this.editRowData ? this.editRowData.requester : null],

        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null],

        PartSerialNumber: [
          this.editRowData ? this.editRowData.PartSerialNumber : null,
        ],
        AssemblyPartNumber: [
          this.editRowData ? this.editRowData.partNumber : null,
        ],
        Subject: [this.editRowData ? this.editRowData.partNumber : null],
        HardwareHistory: [
          this.editRowData ? this.editRowData.partNumber : null,
        ],
        InvestType: [this.editRowData ? this.editRowData.partNumber : null],
        WpiActive: [this.editRowData ? this.editRowData.WpiActive : null],
        WpiNumber: [this.editRowData ? this.editRowData.WpiNumber : null],
        InvestigationTypes: [
          this.editRowData ? this.editRowData.InvestigationTypes : null,
        ],
      });
      this.fieldArray = [
        [
          { label: 'BeingWorkedBy', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy}, 
          { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate'}, 
          { label: 'CompleteDate', type: 'date', control: 'CompleteDate'}, 
          { label: 'Customer Input', type: 'select', control: 'InputFrom', options: this.inputFrom}, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList}
        ],
        [
          { label: ' Requester', type: 'text', control: 'Requester'}, 
          { label: 'ProductCategory', type: 'select', control: 'ProductCategory', options: this.productCategory}, 
          { label: 'Program Model or Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel}, 
          { label: 'Part Number', type: 'text', control: 'PartNumber'}, 
          { label: 'Serial Number', type: 'text', control: 'PartSerialNumber'}, 
          { label: 'Assembly PartNumber', type: 'text', control: 'AssemblyPartNumber'}, 
          { label: 'Subject', type: 'textarea', control: 'Subject'}, 
          { label: 'HardwareHistory', type: 'textarea', control: 'HardwareHistory'}
        ],
        [
          { label: 'Investigation Type', type: 'select', control: 'InvestType', options: this.investigationTypes}, 
          { label: 'WPI Number', type: 'text', control: 'WpiNumber'}, 
          { label: 'WPI Active', type: 'select', control: 'WpiActive', options: [ { Id: 1, Description: 'Yes' }, { Id: 2, Description: 'No' }, ]}
        ]
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'metallicdesign') {
      this.title = 'Material Engineering Metallic Design Limits Workload Form';
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.beingWorkedBy : null,
          [Validators.required],
        ],
        InputDate: '',
        WorkStartDate: '',
        CompleteDate: '',
        InputFrom: '',
        Status: '',
        Requestor: '',
        ProductCategory: '',
        ProgramModelNumber: '',
        PartNumber: '',
        WpiNumber: '',
        Task: '',
        Subject: '',
      });
      this.fieldArray = [
        [
          { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy, }, 
          { label: 'Input Date', type: 'date', control: 'InputDate', }, 
          { label: 'Work Start Date', type: 'date', control: 'WorkStartDate', }, 
          { label: 'Complete Date', type: 'date', control: 'CompleteDate', }, 
          { label: 'Customer Input', type: 'select', control: 'InputFrom', options: this.inputFrom, }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, },
        ],
        [
          { label: 'Requestor', type: 'text', control: 'Requestor', }, 
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Program Model or Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, }, 
          { label: 'PartNumber', type: 'text', control: 'PartNumber', }, 
          { label: 'Wpi Number', type: 'text', control: 'WpiNumber', }, 
          { label: 'Task', type: 'select', control: 'Task', options: this.task, }, 
          { label: 'Subject', type: 'textarea', control: 'Subject', },
        ],
      ];

      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
        { field: 'Requestor', header: 'Requestor' },
      ];
    } else if (this.pageName == 'heatexchange') {
      this.title = 'Material Engineering Hex Workload Form';
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.beingWorkedBy : null,
          [Validators.required],
        ],
        WorkInQueueDate: [
          this.editRowData ? this.editRowData.WorkInQueueDate : null,
        ],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        CompleteDate: [this.editRowData ? this.editRowData.CompleteDate : null],
        Priority: [this.editRowData ? this.editRowData.Priority : null],
        ScheduleDays: [this.editRowData ? this.editRowData.ScheduleDays : null],
        TeamTaskID: [this.editRowData ? this.editRowData.TeamTaskId : null],
        Requester: [this.editRowData ? this.editRowData.requester : null],
        RequestedDueDate: [
          this.editRowData ? this.editRowData.RequestedDueDate : null,
        ],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        PartNumber: [this.editRowData ? this.editRowData.partNumber : null],
        PartSerialNumber: [
          this.editRowData ? this.editRowData.PartSerialNumber : null,
        ],
        InputFrom: [this.editRowData ? this.editRowData.InputFrom : null],
        JobDescription: [
          this.editRowData ? this.editRowData.JobDescription : null,
        ],
        Task: [this.editRowData ? this.editRowData.Task : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        WpiActive: [this.editRowData ? this.editRowData.WpiActive : null],
        WpiNumber: [this.editRowData ? this.editRowData.WpiNumber : null],
        HoursWorked: [this.editRowData ? this.editRowData.HoursWorked : null],
      });
      this.fieldArray = [
        [
          { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy, }, 
          { label: ' Work In Queue Date', type: 'text', control: 'WorkInQueueDate', }, 
          { label: 'Work Start Date', type: 'date', control: 'WorkStartDate', }, 
          { label: 'Work Complete Date', type: 'date', control: 'CompleteDate', }, 
          { label: 'Priority', type: 'select', control: 'Priority', options: this.priority, }, 
          { label: 'Schedule Days', type: 'select', control: 'ScheduleDays', options: this.statusList, }, 
          { label: 'Team ID', type: 'select', control: 'TeamTaskID', options: this.teamID, },
        ],
        [
          { label: 'Requestor', type: 'text', control: 'Requester', }, 
          { label: 'Req. Compl. Date', type: 'date', control: 'RequestedDueDate', }, 
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Program Model or Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, }, 
          { label: 'Part Number', type: 'text', control: 'PartNumber', }, 
          { label: 'Serial Number', type: 'text', control: 'PartSerialNumber', }, 
          { label: 'Input From', type: 'select', control: 'InputFrom', options: this.inputFrom, }, 
          { label: 'Task', type: 'select', control: 'Task', options: this.task, }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, }, 
          { label: 'Job Description', type: 'textarea', control: 'JobDescription', },
        ],
        [
          { label: 'Wpi Number', type: 'text', control: 'WpiNumber', }, 
          { label: 'Wpi Active', type: 'select', control: 'WpiActive', options: [ { Id: 1, Description: 'Yes' }, { Id: 2, Description: 'No' }, ], }, 
          { label: 'Number Of Hours Worked', type: 'text', control: 'HoursWorked', },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
        { field: 'Requestor', header: 'Requestor' },
      ];
    } else if (this.pageName == 'componentspecific') {
      this.title = 'Material Engineering Component Specific Workload Form';
      this.createForm = this.fb.group({
        BeingWorkedBy: [
          this.editRowData ? this.editRowData.beingWorkedBy : null,
          [Validators.required],
        ],
        Priority: [this.editRowData ? this.editRowData.Priority : null],
        InputDate: [this.editRowData ? this.editRowData.InputDate : null],
        ScheduleDays: [this.editRowData ? this.editRowData.ScheduleDays : null],
        WorkInDueDate: [
          this.editRowData ? this.editRowData.WorkInDueDate : null,
        ],
        WorkStartDate: [
          this.editRowData ? this.editRowData.WorkStartDate : null,
        ],
        CompleteDate: [this.editRowData ? this.editRowData.CompleteDate : null],
        Requester: [this.editRowData ? this.editRowData.requester : null],
        ProductCategory: [
          this.editRowData ? this.editRowData.ProductCategory : null,
        ],
        ProgramModelNumber: [
          this.editRowData ? this.editRowData.ProgramModelNumber : null,
        ],
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        WpiNumber: [this.editRowData ? this.editRowData.WpiNumber : null],
      });
      this.fieldArray = [
        [
          { label: 'Work Start Date', type: 'date', control: 'WorkStartDate', }, 
          { label: 'Work Complete Date', type: 'date', control: 'CompleteDate', }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, }, 
          { label: 'BeingWorkedBy', type: 'select', control: 'BeingWorkedBy', options: this.beingWorkedBy, }, 
          { label: 'Program Model or Number #', type: 'select', control: 'ProgramModelNumber', options: this.programModel, }, 
          { label: 'ProductCategory', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'ComponentName', type: 'text', control: 'ComponentName', }, 
          { label: 'Component Type', type: 'select', control: 'ComponentType', options: [ { Id: 1, Description: 'Make' }, { Id: 2, Description: 'Buy' }, ], }, 
        ],
      ];

      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
        { field: 'Requestor', header: 'Requestor' },
      ];
    } else if (this.pageName == 'supplierrequest') {
      this.title = 'Supplier Request For Information';
      this.createForm = this.fb.group({
        SRINumber: [
          this.editRowData ? this.editRowData.SRINumber : null,
          [Validators.required],
        ],
        WorkSubmittedDate: '',
        HoursWorked: '',
        CompleteDate: '',
        Task: '',
        ProductCategory: '',
        ReviewedBy: '',
        Status: '',
        ECNumber: '',
        SRIResponse: '',
      });
      this.fieldArray = [
        [
          { label: 'SRI Number', type: 'text', control: 'SRINumber', }, 
          { label: 'Work Submitted Date', type: 'date', control: 'WorkSubmittedDate', }, 
          { label: 'Number Of Hours Worked', type: 'text', control: 'HoursWorked', }, 
          { label: 'CompleteDate', type: 'date', control: 'CompleteDate', }, 
          { label: 'Task', type: 'select', control: 'Task', options: this.task, }, 
          { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, }, 
          { label: 'Reviewed By', type: 'select', control: 'ReviewedBy', options: this.reviewedBy, }, 
          { label: 'Status', type: 'select', control: 'Status', options: this.statusList, }, 
          { label: 'ECNumber', type: 'text', control: 'ECNumber', }, 
          { label: 'SRI Response', type: 'textarea', control: 'SRIResponse', },
        ],
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'SRINumber', header: 'SRI Number' },
        { field: 'Task', header: 'Task' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'specification') {
      this.title = 'Specifications';
      this.createForm = this.fb.group({
        CrNumber: [
          this.editRowData ? this.editRowData.CrNumber : null,
          [Validators.required],
        ],
        HoursWorked: [this.editRowData ? this.editRowData.HoursWorked : null],
        ChargeNumber: [this.editRowData ? this.editRowData.ChargeNumber : null],
        Task: [this.editRowData ? this.editRowData.Task : null],
        TeamTaskID: [this.editRowData ? this.editRowData.TeamTaskId : null],
        ReviewedBy: [this.editRowData ? this.editRowData.ReviewedBy : null],
        Requester: [this.editRowData ? this.editRowData.requester : null],
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
        PartNumber: [this.editRowData ? this.editRowData.PartNumber : null],
        Status: [this.editRowData ? this.editRowData.Status : null],
        JobDescription: [
          this.editRowData ? this.editRowData.JobDescription : null,
        ],
      });
      this.fieldArray = [
        [{ label: 'Cr Number', type: 'select', control: 'CrNumber', options: this.statusList, }, 
        { label: ' NumberOfHoursWorked', type: 'text', control: 'HoursWorked', }, 
        { label: 'Work in Queue Date', type: 'date', control: 'WorkInQueueDate', }, 
        { label: 'Charge Number', type: 'select', control: 'ChargeNumber', options: this.statusList, }, 
        { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate', }, 
        { label: 'CompleteDate', type: 'date', control: 'CompleteDate', }, 
        { label: 'Part Number', type: 'text', control: 'ProgramNumber', }, 
        { label: 'Status', type: 'select', control: 'Status', options: this.statusList, }]
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    }
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

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
    if (this.tabIndex) {
      this.getRecords();
    }
  }

  getRecords() {
    this.utilityService.getResponse('get' + this.pageName).subscribe(
      (res) => {
        this.records = res.body['Data'];
      },
      (error) => {
        this.error = error.statusText;
      }
    );
  }

  convertToYYMMDD(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  saveForm() {
    if (this.editForm) {
      this.formID = this.editRowData.Id;
    }
    if (this.createForm.valid) {
      const newData = this.createForm.value;

      newData.InputDate = this.convertToYYMMDD(newData.InputDate);
      newData.WorkStartDate = this.convertToYYMMDD(newData.WorkStartDate);
      newData.CompleteDate = this.convertToYYMMDD(newData.CompleteDate);
      // newData.InputDate = this.datePipe.transform(
      //   newData.InputDate,
      //   'yyyy-MM-dd'
      // );
      // newData.WorkStartDate = this.datePipe.transform(
      //   newData.WorkStartDate,
      //   'yyyy-MM-dd'
      // );

      // newData.CompleteDate = this.datePipe.transform(
      //   newData.CompleteDate,
      //   'yyyy-MM-dd'
      // );

      if (this.userComments) {
        this.userComments.forEach((element) => {
          let userCommentsObj = {
            DateTime: '2021-10-12T00:00:00',
            Employee: element.userName,
            Comment: element.comments,
          };
          newData.CommentsList.push(userCommentsObj);
        });
      }

      if (this.createForm.valid) {
        //Form Valid. Calling Save API
        let api, successMsg;
        if (this.formID != undefined) {
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
            this.formID = res['Data'].Id;
            this.utilityService.removeValidators(this.createForm);
            this.utilityService.displayAlert('success', successMsg);
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
  receiveUserComment(event) {
    this.userComments = event;
  }
  close() {
    this.router.navigate(['home/switchboard/']);
  }
}
