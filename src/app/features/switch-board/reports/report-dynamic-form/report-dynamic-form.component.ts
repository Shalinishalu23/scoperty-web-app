import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { UtilityService } from 'src/app/services/utility.service';
import { DatePipe } from '@angular/common';

/**
 *
 *
 * @export
 * @class ReportDynamicFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-report-dynamic-form',
  templateUrl: './report-dynamic-form.component.html',
  styleUrls: ['./report-dynamic-form.component.scss'],
  providers: [DatePipe],
})
export class ReportDynamicFormComponent implements OnInit {
  tabIndex: number = 0;
  @Input() editRowData: any;
  @Input() editForm: any;
  title: string;
  pageName: string;
  createReportForm: FormGroup;
  displaySpinner: boolean = false;
  fieldArray: any;
  cols: any[];
  records: any; // make this as mainexpandmodel
  error: string;
  productCategory: any;
  teamID: any;
  task: any;
  reviewedBy: any;
  tableFrom: string;
  from: any;
  formID: any;
  validationErrMsg: string = 'Please fill all mandatory fields';
  userComments: any;
  items: any;
  // investigationTypes: any;
  navLinks: any;
  Report: any;
  By: any;

  /**
   * Creates an instance of ReportDynamicFormComponent.
   * @param {Router} router
   * @param {FormBuilder} fb
   * @param {GlobalVariableService} globalVariableService
   * @param {UtilityService} utilityService
   * @param {DatePipe} datePipe
   * @memberof ReportDynamicFormComponent
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
   * @memberof ReportDynamicFormComponent
   */
  ngOnInit(): void {
    // this.task = this.globalVariableService.getTaskDD();
    // this.productCategory = this.globalVariableService.getProductCategoryDD();
    this.pageName = this.router.url.split('/').pop();
    this.Report = [
      { Id: 1, Description: 'My Open Jobs Report' },
      { Id: 2, Description: 'Group Job Tracking' },
      { Id: 3, Description: 'Product Support Team Metrics/Average' },
      { Id: 4, Description: 'Product Support Team Metrics/Schedule' },
      { Id: 5, Description: 'Product Support Team Metrics/Input Jobs' },
      { Id: 6, Description: 'Product Support Team Metrics/Weighted' },
      { Id: 7, Description: 'Run FI Monthly Metrics' },
      { Id: 8, Description: 'Go To PST Jobs' },
    ];
    this.By = [
      { Id: 1, Description: 'Analyst' },
      { Id: 2, Description: 'Responsible' },
    ];
    this.createFormBuilder();
    this.getRecords();
  }

  /**
   *
   *
   * @memberof ReportDynamicFormComponent
   */
  createFormBuilder() {
    // if (this.pageName == 'pst') {
    //   this.navLinks = [
    //     { label: 'My Open Jobs Report', formName: 'jobsreport' },
    //     { label: 'Group Job Tracking', formName: 'jobtracking' },
    //   ];
    //   this.title = 'Product Support Team Reports Menu';
    //   this.createReportForm = this.fb.group({});
    //   this.fieldArray = [];
    //   this.cols = [];
    // } else
    if (this.pageName == 'pst') {
      this.title = 'Product Support Team Reports';
      this.createReportForm = this.fb.group({
        Report: [this.editRowData ? this.editRowData.workStartDate : null],
        By: [this.editRowData ? this.editRowData.workStartDate : null],
        WorkloadID: [
          this.editRowData ? this.editRowData.productCategory : null,
        ],
        From: [this.editRowData ? this.editRowData.requester : null],
        To: [this.editRowData ? this.editRowData.workStartDate : null],
        Author: [this.editRowData ? this.editRowData.workStartDate : null],
      });
      this.fieldArray = [
        { label: 'Report', type: 'select', control: 'Report', options: this.Report, }, 
        { label: 'By', type: 'select', control: 'By', options: this.By }, { label: 'Author', type: 'select', control: 'Author', options: this.By, },
        { label: 'WorkloadID', type: 'number', control: 'WorkloadID' },
        { label: 'From', type: 'date', control: 'From' },
        { label: 'To', type: 'date', control: 'To' },
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'myjobs') {
      this.title = 'myjobs';
      this.createReportForm = this.fb.group({
        Report: [this.editRowData ? this.editRowData.workStartDate : null],
      });
      this.fieldArray = [
        { label: 'Analyst Name', type: 'text', control: 'Report' },
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'alljobs') {
      this.title = 'All Open Jobs Reports';
      this.createReportForm = this.fb.group({
        Report: [this.editRowData ? this.editRowData.workStartDate : null],
      });
      this.fieldArray = [
        {
          label: 'Analyst Name',
          type: 'text',
          control: 'Report',
        },
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'montlydr') {
      this.title = 'Monthly drawing review';
      this.createReportForm = this.fb.group({
        Report: [this.editRowData ? this.editRowData.workStartDate : null],
      });
      this.fieldArray = [
        { label: 'Analyst Name', type: 'text', control: 'Report' },
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'qcpc') {
      this.title = 'Department QCPC Charts';
      this.createReportForm = this.fb.group({
        Report: [this.editRowData ? this.editRowData.workStartDate : null],
        From: [this.editRowData ? this.editRowData.requester : null],
        To: [this.editRowData ? this.editRowData.workStartDate : null],
      });
      this.fieldArray = [
        {
          label: 'Report',
          type: 'select',
          control: 'Report',
          options: [
            { Id: 1, Description: 'Turnback/Escapes Rollup' },
            { Id: 2, Description: 'Trend Chart' },
            { Id: 3, Description: 'QCPC by Individual' },
            { Id: 4, Description: 'general Purpose Related Chart' },
            { Id: 5, Description: 'Turnback Rollup' },
            { Id: 6, Description: 'QCPC by Task' },
          ],
        },
        { label: 'From', type: 'date', control: 'From' },
        { label: 'To', type: 'date', control: 'To' },
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'keyprocess') {
      this.title = 'Key Process Metrics Reports';
      this.createReportForm = this.fb.group({
        Report: [this.editRowData ? this.editRowData.workStartDate : null],
        From: [this.editRowData ? this.editRowData.requester : null],
        To: [this.editRowData ? this.editRowData.workStartDate : null],
        Task: [this.editRowData ? this.editRowData.workStartDate : null],
        ProductCategory: [
          this.editRowData ? this.editRowData.workStartDate : null,
        ],
      });
      this.fieldArray = [
        {
          label: 'Report',
          type: 'select',
          control: 'Report',
          options: [
            { Id: 1, Description: 'Drawing Review Metric Chart' },
            { Id: 2, Description: 'Drawing Review Metric Report' },
            { Id: 3, Description: 'Drawing Not Meeting Metric' },
            { Id: 4, Description: 'Design Review for M+P Metrics Chart' },
            { Id: 5, Description: 'Failure Analysis Metric Chart' },
            { Id: 6, Description: 'Design Allowables Metric Chart' },
            { Id: 7, Description: 'Test Plan Metric' },
            { Id: 8, Description: 'Test Plan Listing' },
            { Id: 9, Description: 'Process Turnback Trend Chart' },
            { Id: 10, Description: 'Process Turnback stacked Bar' },
            { Id: 11, Description: 'Process Turnback Pareto Chart' },
            { Id: 12, Description: 'Weighted Process Turnback Pareto Chart' },
            { Id: 13, Description: 'Turnback Detailed Information' },
          ],
        },
        { label: 'From', type: 'date', control: 'From' },
        { label: 'To', type: 'date', control: 'To' },
        { label: 'Task', type: 'select', control: 'Task', options: this.task },
        { label: 'Product Category', type: 'select', control: 'ProductCategory', options: this.productCategory, },
      ];
      this.cols = [
        { field: 'Id', header: 'ID' },
        { field: 'BeingWorkedBy', header: 'BeingWorkedBy' },
        { field: 'Status', header: 'Status' },
      ];
    } else if (this.pageName == 'psr') {
      this.title = 'Product Support Team';
      this.createReportForm = this.fb.group({
        Report: [this.editRowData ? this.editRowData.workStartDate : null],
        From: [this.editRowData ? this.editRowData.requester : null],
        To: [this.editRowData ? this.editRowData.workStartDate : null],
      });
      this.fieldArray = [
        {
          label: 'Report',
          type: 'select',
          control: 'Report',
          options: [
            { Id: 1, Description: 'Turnback/Escapes Rollup' },
            { Id: 2, Description: 'Trend Chart' },
            { Id: 3, Description: 'QCPC by Individual' },
            { Id: 4, Description: 'general Purpose Related Chart' },
            { Id: 5, Description: 'Turnback Rollup' },
            { Id: 6, Description: 'QCPC by Task' },
          ],
        },
        { label: 'From', type: 'date', control: 'From' },
        { label: 'To', type: 'date', control: 'To' },
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
   * @memberof ReportDynamicFormComponent
   */
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
   * @memberof ReportDynamicFormComponent
   */
  close() {
    this.router.navigate(['home/switchboard/']);
  }

  /**
   *
   *
   * @memberof ReportDynamicFormComponent
   */
  lastClickedIndex;
  changeActive(formName) {
    this.router.navigate(['home/switchboard/' + formName]);
  }

  /**
   *
   *
   * @memberof ReportDynamicFormComponent
   */
  searchForm() {
    // fetch data and display in table
  }
}
