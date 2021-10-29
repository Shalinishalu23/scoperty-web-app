import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { UtilityService } from 'src/app/services/utility.service';
import { DatePipe } from '@angular/common';

/**
 *
 *
 * @export
 * @class ToolboxDynamicFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-toolbox-dynamic-form',
  templateUrl: './toolbox-dynamic-form.component.html',
  styleUrls: ['./toolbox-dynamic-form.component.scss'],
  providers: [DatePipe],
})
export class ToolboxDynamicFormComponent implements OnInit {
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
  tableFrom: string;
  from: any;
  formID: any;
  validationErrMsg: string = 'Please fill all mandatory fields';
  userComments: any;
  // investigationTypes: any;

  /**
   * Creates an instance of ToolboxDynamicFormComponent.
   * @param {Router} router
   * @param {FormBuilder} fb
   * @param {GlobalVariableService} globalVariableService
   * @param {UtilityService} utilityService
   * @param {DatePipe} datePipe
   * @memberof ToolboxDynamicFormComponent
   */
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public globalVariableService: GlobalVariableService,
    public utilityService: UtilityService,
    public datePipe: DatePipe
  ) {}

  /**
   *
   *
   * @memberof ToolboxDynamicFormComponent
   */
  ngOnInit(): void {
    this.pageName = this.router.url.split('/').pop();
    this.getStateDropdown();
    this.createFormBuilder();
    this.getRecords();
  }

  /**
   *
   *
   * @memberof ToolboxDynamicFormComponent
   */
  createFormBuilder() {
    switch (this.pageName) {
      case 'turnbacks': {
        this.setTitle('Record Turnbacks');
        this.createForm = this.fb.group({
          WorkLoadID: [
            this.editRowData ? this.editRowData.beingWorkedBy : null,
            [Validators.required],
          ],
          TurnbackCategory: [
            this.editRowData ? this.editRowData.requester : null,
          ],
          ResponsibleParty: [
            this.editRowData ? this.editRowData.requester : null,
          ],
          ReportedBy: [this.editRowData ? this.editRowData.requester : null],
          TurnbackSevere: [
            this.editRowData ? this.editRowData.requester : null,
          ],
          Detailed: [this.editRowData ? this.editRowData.requester : null],
        });
        this.fieldArray = [
          { label: ' WorkLoadID', type: 'text', control: 'WorkLoadID' },
          { label: 'TurnbackCategory', type: 'select', control: 'TurnbackCategory', options: this.statusList, },
          { label: 'ResponsibleParty', type: 'select', control: 'ResponsibleParty', options: this.statusList, },
          { label: 'ReportedBy', type: 'select', control: 'ReportedBy', options: this.statusList, },
          { label: 'TurnbackSevere', type: 'select', control: 'TurnbackSevere', options: this.statusList, },
          { label: 'Detailed Explanation', type: 'textarea', control: 'Detailed', },
        ];
        this.cols = [
          { field: 'Id', header: 'ID' },
          { field: 'TurnbackCategory', header: 'TurnbackCategory' },
          { field: 'Status', header: 'Status' },
        ];
        break;
      }
      case 'utrc': {
        this.setTitle(this.pageName);
        this.createForm = this.fb.group({
          IDWAStartDate: [
            this.editRowData ? this.editRowData.beingWorkedBy : null,
            [Validators.required],
          ],
          Date: [this.editRowData ? this.editRowData.requester : null],
          Supplement: [this.editRowData ? this.editRowData.requester : null],
          //check below
          From: [this.editRowData ? this.editRowData.requester : null],
          Originator: [this.editRowData ? this.editRowData.requester : null],
          OriginatorName: [
            this.editRowData ? this.editRowData.requester : null,
          ],
          OriginatorNo: [this.editRowData ? this.editRowData.requester : null],
          UTRCTechnicalContact: [
            this.editRowData ? this.editRowData.requester : null,
          ],
          ProgramTitle: [this.editRowData ? this.editRowData.requester : null],
          WorkDescription: [
            this.editRowData ? this.editRowData.inputDate : null,
          ],
          WorkloadID: [
            this.editRowData ? this.editRowData.productCategory : null,
          ],
          SampleDisposition: [
            this.editRowData ? this.editRowData.workStartDate : null,
          ],
          PrimeCustomer: [
            this.editRowData ? this.editRowData.programModelNum : null,
          ],
          PrimeContract: [
            this.editRowData ? this.editRowData.completeDate : null,
          ],
          //check below checkbox
          Government: [this.editRowData ? this.editRowData.partNumber : null],

          DPASRating: [this.editRowData ? this.editRowData.status : null],
          AuthorizedDollars: [
            this.editRowData ? this.editRowData.status : null,
          ],
          Hours: [this.editRowData ? this.editRowData.status : null],
          StartDate: [this.editRowData ? this.editRowData.status : null],
          EndDate: [this.editRowData ? this.editRowData.status : null],
          JDEAccountKey: [this.editRowData ? this.editRowData.status : null],
          WorkOrder: [this.editRowData ? this.editRowData.status : null],
          FinancialSignature: [
            this.editRowData ? this.editRowData.status : null,
          ],
        });
        this.fieldArray = [
          { label: 'IDWA Start Date', type: 'date', control: 'IDWAStartDate' },
          { label: 'Date', type: 'date', control: 'Date' },
          { label: 'Supplement #', type: 'number', control: 'Supplement' },
          //check below 777
          // {
          //   label: 'From',
          //   type: 'check',
          //   control: 'From',
          // },
          { label: 'Originator', type: 'select', control: 'Originator', options: this.statusList, },
          { label: 'OriginatorName', type: 'text', control: 'OriginatorName' },
          { label: 'OriginatorNo', type: 'text', control: 'OriginatorNo' },
          { label: 'UTRC Technical Contact', type: 'text', control: 'UTRCTechnicalContact', },
          { label: 'Program Title', type: 'text', control: 'ProgramTitle' }, 
          { label: 'Work Description', type: 'textarea', control: 'WorkDescription', },
          { label: 'Workload ID', type: 'number', control: 'WorkloadID' },
          { label: 'Sample Disposition', type: 'select', control: 'SampleDisposition', options: this.statusList, },
          { label: 'Prime Customer', type: 'text', control: 'PrimeCustomer' },
          { label: 'Prime Contract #', type: 'number', control: 'PrimeContract', },
          //check below checkbox
          { label: 'Government', type: 'select', control: 'Government' },
          { label: 'DPAS Rating', type: 'text', control: 'DPASRating' },
          { label: 'Authorized Dollars', type: 'number', control: 'AuthorizedDollars', }, 
          { label: 'Hours', type: 'number', control: 'Hours' }, 
          { label: 'Start Date', type: 'date', control: 'StartDate' }, 
          { label: 'End Date', type: 'date', control: 'EndDate' }, 
          { label: 'JDE Account Key', type: 'text', control: 'JDEAccountKey' }, 
          { label: 'Work Order', type: 'text', control: 'WorkOrder' }, 
          { label: 'Financial Signature', type: 'text', control: 'FinancialSignature', },
        ];
        this.cols = [
          { field: 'Id', header: 'ID' },
          { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
          { field: 'Status', header: 'Status' },
        ];
        break;
      }
      case 'memos': {
        this.setTitle(this.pageName);
        this.createForm = this.fb.group({
          WorkloadID: [
            this.editRowData ? this.editRowData.beingWorkedBy : null,
            [Validators.required],
          ],
          MemoType: [
            this.editRowData ? this.editRowData.productCategory : null,
          ],
          Author: [this.editRowData ? this.editRowData.inputDate : null],
          MemoTitle: [this.editRowData ? this.editRowData.workStartDate : null],
          MemoPublishDate: [
            this.editRowData ? this.editRowData.inputDate : null,
          ],
        });
        this.fieldArray = [
          { label: 'WorkloadID', type: 'number', control: 'WorkloadID', }, 
          { label: 'Enter Memo Type', type: 'select', control: 'MemoType', options: this.statusList, }, 
          { label: 'Choose Author', type: 'select', control: 'Author', options: this.statusList, }, 
          { label: 'Enter Memo Title', type: 'textarea', control: 'MemoTitle', }, 
          { label: 'Enter Memo Publish Date', type: 'date', control: 'MemoPublishDate', },
        ];
        this.cols = [
          { field: 'Id', header: 'ID' },
          { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
          { field: 'Status', header: 'Status' },
        ];
        break;
      }
      case 'lwr': {
        this.setTitle('Lab Work Request');
        this.createForm = this.fb.group({
          LWRTo: [
            this.editRowData ? this.editRowData.LWRTo : null,
            [Validators.required],
          ],
          LWRId: [this.editRowData ? this.editRowData.LWRId : null],
          LWRFrom: [this.editRowData ? this.editRowData.LWRFrom : null],
          Phone: [this.editRowData ? this.editRowData.Phone : null],
          WL: [this.editRowData ? this.editRowData.WL : null],
          DateIn: [this.editRowData ? this.editRowData.DateIn : null],
          NeedDate: [this.editRowData ? this.editRowData.NeedDate : null],
          WPI: [this.editRowData ? this.editRowData.WPI : null],
          Program: [this.editRowData ? this.editRowData.Program : null],
          PN: [this.editRowData ? this.editRowData.PN : null],
          SN: [this.editRowData ? this.editRowData.SN : null],
          OtherID: [this.editRowData ? this.editRowData.OtherID : null],
          Subject: [this.editRowData ? this.editRowData.Subject : null],
          Task: [this.editRowData ? this.editRowData.Task : null],
          TaskCompletedBy: [
            this.editRowData ? this.editRowData.TaskCompletedBy : null,
          ],
        });

        this.fieldArray = [
          { label: 'Lab Work Name', type: 'select', control: 'LWRTo', options: this.statusList, }, 
          { label: 'Lab Work ID', type: 'select', control: 'LWRId', options: this.statusList, },
          { label: 'Lab Work Request From', type: 'text', control: 'LWRFrom' },
          { label: 'Phone', type: 'number', control: 'Phone' },
          { label: 'WL#', type: 'number', control: 'WL' },
          { label: 'Date In', type: 'date', control: 'DateIn' },
          { label: 'Need Date', type: 'date', control: 'NeedDate' },
          { label: 'WPI#', type: 'number', control: 'WPI' },
          { label: 'Program', type: 'text', control: 'Program' },
          { label: 'P/N', type: 'number', control: 'PN' },
          { label: 'S/N', type: 'number', control: 'SN' },
          { label: 'OtherID', type: 'number', control: 'OtherID' },
          { label: 'Subject', type: 'text', control: 'Subject' },
          { label: 'Task', type: 'textarea', control: 'Task' },
          { label: 'Task Completed By', type: 'text', control: 'TaskCompletedBy', },
        ];

        this.cols = [
          { field: 'Id', header: 'ID' },
          { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
          { field: 'Status', header: 'Status' },
        ];
        break;
      }

      case 'micro': {
        this.setTitle('Micro Request');
        this.createForm = this.fb.group({
          LWRTo: [
            this.editRowData ? this.editRowData.beingWorkedBy : null,
            [Validators.required],
          ],
          LWRId: [this.editRowData ? this.editRowData.requester : null],
          LWRFrom: [this.editRowData ? this.editRowData.requester : null],
          Phone: [this.editRowData ? this.editRowData.requester : null],
          WL: [this.editRowData ? this.editRowData.requester : null],
          DateIn: [this.editRowData ? this.editRowData.requester : null],
          NeedDate: [this.editRowData ? this.editRowData.requester : null],
          WPI: [this.editRowData ? this.editRowData.inputDate : null],
          Program: [this.editRowData ? this.editRowData.productCategory : null],
          PN: [this.editRowData ? this.editRowData.workStartDate : null],
          SN: [this.editRowData ? this.editRowData.programModelNum : null],
          OtherID: [this.editRowData ? this.editRowData.completeDate : null],
          Subject: [this.editRowData ? this.editRowData.partNumber : null],
          Task: [this.editRowData ? this.editRowData.status : null],
          TaskCompletedBy: [
            this.editRowData ? this.editRowData.jobDescription : null,
          ],
        });
        this.fieldArray = [
          { label: 'Lab Work Name', type: 'select', control: 'LWRTo', options: this.statusList, }, 
          { label: 'Lab Work ID', type: 'select', control: 'LWRId', options: this.statusList, },
          { label: 'Lab Work Request From', type: 'text', control: 'LWRFrom' },
          { label: 'Phone', type: 'number', control: 'Phone' },
          { label: 'WL#', type: 'number', control: 'WL' },
          { label: 'Date In', type: 'date', control: 'DateIn' },
          { label: 'Need Date', type: 'date', control: 'NeedDate' },
          { label: 'WPI#', type: 'number', control: 'WPI' },
          { label: 'Program', type: 'text', control: 'Program' },
          { label: 'P/N', type: 'number', control: 'PN' },
          { label: 'S/N', type: 'number', control: 'SN' },
          { label: 'OtherID', type: 'number', control: 'OtherID' },
          { label: 'Subject', type: 'text', control: 'Subject' },
          { label: 'Task', type: 'textarea', control: 'Task' },
          { label: 'Task Completed By', type: 'text', control: 'TaskCompletedBy', },
        ];
        this.cols = [
          { field: 'Id', header: 'ID' },
          { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
          { field: 'Status', header: 'Status' },
        ];
        break;
      }
      case 'poc': {
        this.setTitle('POC');
        this.createForm = this.fb.group({
          SubmitDate: [
            this.editRowData ? this.editRowData.beingWorkedBy : null,
            [Validators.required],
          ],
          SubmittedBy: [this.editRowData ? this.editRowData.requester : null],
          DateRequired: [this.editRowData ? this.editRowData.requester : null],
          Company: [this.editRowData ? this.editRowData.requester : null],
          Attention: [this.editRowData ? this.editRowData.requester : null],
          Address: [this.editRowData ? this.editRowData.requester : null],
          CityState: [this.editRowData ? this.editRowData.requester : null],
          Zip: [this.editRowData ? this.editRowData.inputDate : null],
          PhoneNumber: [
            this.editRowData ? this.editRowData.productCategory : null,
          ],
          FaxNumber: [this.editRowData ? this.editRowData.workStartDate : null],
          GovernmentOrder: [
            this.editRowData ? this.editRowData.programModelNum : null,
          ],
          Type: [this.editRowData ? this.editRowData.completeDate : null],
          MatlObjectAccountNo: [
            this.editRowData ? this.editRowData.partNumber : null,
          ],
          CommodityCode: [this.editRowData ? this.editRowData.status : null],
          COPOnly: [this.editRowData ? this.editRowData.jobDescription : null],
          COPContractNumber: [
            this.editRowData ? this.editRowData.status : null,
          ],
          JDEAccountNumber: [this.editRowData ? this.editRowData.status : null],
          AppropriationNumber: [
            this.editRowData ? this.editRowData.status : null,
          ],
          VendorSubstitutes: [
            this.editRowData ? this.editRowData.status : null,
          ],
          PartialDelivery: [this.editRowData ? this.editRowData.status : null],
          SANeeded: [this.editRowData ? this.editRowData.status : null],
          ReturnToHS: [this.editRowData ? this.editRowData.status : null],
          RMANumber: [this.editRowData ? this.editRowData.status : null],
          PriceSource: [this.editRowData ? this.editRowData.status : null],
          SpecialDeliveryInstructions: [
            this.editRowData ? this.editRowData.status : null,
          ],
        });
        this.fieldArray = [
          { label: 'Submit Date', type: 'date', control: 'SubmitDate' },
          { label: 'Submitted By', type: 'text', control: 'SubmittedBy' },
          { label: 'Date Required', type: 'date', control: 'DateRequired' },
          { label: 'Company', type: 'text', control: 'Company' },
          { label: 'Attention', type: 'text', control: 'Attention' },
          { label: 'Address', type: 'text', control: 'Address' },
          { label: 'CityState', type: 'text', control: 'CityState' },
          { label: 'Zip', type: 'number', control: 'Zip' },
          { label: 'PhoneNumber', type: 'number', control: 'PhoneNumber' },
          { label: 'FaxNumber', type: 'number', control: 'FaxNumber' },
          { label: 'Government Order', type: 'text', control: 'GovernmentOrder', }, 
          { label: 'Type', type: 'text', control: 'Type' }, 
          { label: 'Matl Object Account Number', type: 'number', control: 'MatlObjectAccountNo', },
           //check below { label: 'Commodity Code', type: 'select', control: 'CommodityCode', options: this.statusList, }, 
          { label: 'COP Only', type: 'text', control: 'COPOnly' }, 
          { label: 'COP Contract Number', type: 'number', control: 'COPContractNumber', }, 
          { label: 'JDE Account Number', type: 'number', control: 'JDEAccountNumber', }, 
          { label: 'Appropriation Number', type: 'number', control: 'AppropriationNumber', }, 
          { label: 'Vendor Substitutes', type: 'text', control: 'VendorSubstitutes', }, 
          { label: 'Partial Delivery', type: 'text', control: 'PartialDelivery', },
          { label: 'SA Needed', type: 'text', control: 'SANeeded' },
          { label: 'Return To HS', type: 'text', control: 'ReturnToHS' },
          { label: 'RMA Number', type: 'number', control: 'RMANumber' },
          { label: 'Price Source', type: 'text', control: 'PriceSource' },
          { label: 'Special Delivery Instructions', type: 'textarea', control: 'SpecialDeliveryInstructions', },
        ];
        this.cols = [
          { field: 'Id', header: 'ID' },
          { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
          { field: 'Status', header: 'Status' },
        ];
        break;
      }
      case 'hardware': {
        this.setTitle('Hardware');
        this.createForm = this.fb.group({
          BoxNumber: [
            this.editRowData ? this.editRowData.beingWorkedBy : null,
            [Validators.required],
          ],
          HardwareID: [
            this.editRowData ? this.editRowData.productCategory : null,
          ],

          //table with dropdown

          Size: [this.editRowData ? this.editRowData.inputDate : null],
          Notes: [this.editRowData ? this.editRowData.workStartDate : null],
        });
        this.fieldArray = [
          { label: 'Box Number', type: 'select', control: 'BoxNumber', options: this.statusList, },
          { label: 'Hardware ID', type: 'number', control: 'HardwareID' },
          //table with dropdown
          { label: 'Size', type: 'textarea', control: 'Size' },
          { label: 'Notes:', type: 'textarea', control: 'Notes' },
        ];
        this.cols = [
          { field: 'Id', header: 'ID' },
          { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
          { field: 'Status', header: 'Status' },
        ];
        break;
      }
      case 'hser': {
        this.setTitle(this.pageName.toUpperCase());
        this.createForm = this.fb.group({
          HSERNumber: [
            this.editRowData ? this.editRowData.beingWorkedBy : null,
            [Validators.required],
          ],
          //textbox
          WorkloadID: [
            this.editRowData ? this.editRowData.productCategory : null,
          ],
          MemoPublishDate: [
            this.editRowData ? this.editRowData.requester : null,
          ],
          MemoHyperlink: [
            this.editRowData ? this.editRowData.workStartDate : null,
          ],
          MemoTitle: [this.editRowData ? this.editRowData.workStartDate : null],
          MemoAuthor: [
            this.editRowData ? this.editRowData.workStartDate : null,
          ],
        });
        this.fieldArray = [
          { label: 'HSER Number', type: 'number', control: 'HSERNumber' },
          //textbox { label: 'WorkloadID', type: 'number', control: 'WorkloadID', },
          { label: 'MemoPublishDate', type: 'date', control: 'MemoPublishDate', },
          { label: 'MemoHyperlink', type: 'text', control: 'MemoHyperlink' },
          { label: 'Memo Title', type: 'textarea', control: 'MemoTitle' },
          { label: 'MemoAuthor', type: 'select', control: 'MemoAuthor', options: this.statusList, },
        ];
        this.cols = [
          { field: 'Id', header: 'ID' },
          { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
          { field: 'Status', header: 'Status' },
        ];
        break;
      }
      default: {
        break;
      }
    }
  }

  /**
   *
   *
   * @param {*} ttl
   * @memberof ToolboxDynamicFormComponent
   */
  setTitle(ttl) {
    this.title = ttl;
  }

  // createFormBuilder() {
  //   if (this.pageName == 'turnbacks') {
  //     this.title = 'Record Turnbacks';

  //   } else if (this.pageName == 'utrc') {
  //     this.title = 'utrc';

  //   } else if (this.pageName == 'memos') {
  //     this.title = 'memos';

  //   } else if (this.pageName == 'lwr') {
  //     this.title = 'Lab Work Request';

  //   } else if (this.pageName == 'micro') {
  //     this.title = 'Micro Request';

  //   } else if (this.pageName == 'poc') {
  //     this.title = 'POC';

  //   } else if (this.pageName == 'hardware') {
  //     this.title = 'Hardware';

  //   } else if (this.pageName == 'hser') {
  //     this.title = 'hser';

  //   }
  // }

  /**
   *
   *
   * @memberof SearchDynamicFormComponent
   */
  getStateDropdown() {
    // this.productCategory = this.globalVariableService.getProductCategoryDD();
    // this.teamID = this.globalVariableService.getTeamIdDD();
    // this.task = this.globalVariableService.getTaskDD();
    // this.statusList = this.globalVariableService.getStatusDD();
    // this.reviewedBy = this.globalVariableService.getBeingWorkedByDD();


    // for check box
    // this.from = [{name:"name1",id:1, isChecked: false},
    //             {name:"name2", id:2,isChecked: true},
    //            ]
    // for radio button
    // this.investigationTypes = [
    //   { name: 'Metallic Failure', id: 1 },
    //   { name: 'Wear Analysis', id: 2 },
    //   { name: 'Debris Analysis', id: 3 },
    //   { name: 'Non-Metallic Failure', id: 4 },
    //   { name: 'Metallic General Services', id: 5 },
    //   { name: 'Non-Metallic General Services', id: 6 },
    // ];
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

  /**
   *
   *
   * @memberof ToolboxDynamicFormComponent
   */
  saveForm() {
    // if (this.editForm) {
    //   this.formID = this.editRowData.id;
    // }
    // if (this.createForm.valid) {
    //   const newData = this.createForm.value;
    //   newData.WorkInQueueDate = this.datePipe.transform(
    //     newData.WorkInQueueDate,
    //     'yyyy-MM-dd'
    //   );
    //   newData.WorkStartDate = this.datePipe.transform(
    //     newData.WorkStartDate,
    //     'yyyy-MM-dd'
    //   );
    //   newData.CompleteDate = this.datePipe.transform(
    //     newData.CompleteDate,
    //     'yyyy-MM-dd'
    //   );
    //   if (this.createForm.valid) {
    //     //Form Valid. Calling Save API
    //     let api, successMsg;
    //     if (this.formID != undefined) {
    //       newData.Id = this.formID;
    //       api = this.utilityService.updateRequest(
    //         this.createForm.value,
    //         this.formID,
    //         'update' + this.pageName
    //       );
    //       successMsg = 'You have updated for  work ID :' + this.formID;
    //     } else {
    //       api = this.utilityService.addRequest(
    //         this.createForm.value,
    //         'add' + this.pageName
    //       );
    //     }
    //     this.displaySpinner = true;
    //     api.subscribe(
    //       (res) => {
    //         this.displaySpinner = false;
    //         if (!this.formID) {
    //           successMsg = 'You have created  Request ID :' + res['id'];
    //         }
    //         this.formID = res['id'];
    //         this.utilityService.removeValidators(this.createForm);
    //         this.utilityService.displayAlert('success', successMsg);
    //       },
    //       (error) => {
    //         this.displaySpinner = false;
    //         this.error = error.statusText;
    //         this.utilityService.displayAlert('error', this.error);
    //       }
    //     );
    //   }
    // } else {
    //   this.utilityService.displayAlert('error', this.validationErrMsg);
    // }
  }

  /**
   *
   *
   * @param {*} event
   * @memberof ToolboxDynamicFormComponent
   */
  receiveUserComment(event) {
    this.userComments = event;
  }

  /**
   *
   *
   * @memberof ToolboxDynamicFormComponent
   */
  close() {
    this.router.navigate(['home/switchboard/']);
  }
}
