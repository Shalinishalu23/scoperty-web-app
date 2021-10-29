import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { UtilityService } from 'src/app/services/utility.service';
import { DatePipe } from '@angular/common';
import { mainExpandModel } from 'src/app/shared/models/datainput-model';
import { HttpClient } from '@angular/common/http';


/**
 *
 *
 * @export
 * @class DataInputComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss'],
  providers: [DatePipe],
})
export class DataInputComponent implements OnInit {
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
  tabTextAdd: string = 'Add Forms';
  tabTextEdit: string = 'Edit Forms';

  /**
   * Creates an instance of DataInputComponent.
   * @param {Router} router
   * @param {FormBuilder} fb
   * @param {GlobalVariableService} globalVariableService
   * @param {UtilityService} utilityService
   * @param {DatePipe} datePipe
   * @memberof DataInputComponent
   */
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public globalVariableService: GlobalVariableService,
    public utilityService: UtilityService,
    public datePipe: DatePipe,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.pageName = this.router.url.split('/').pop();
    // this.getRecords();
  }

  /**
   *
   *
   * @param {MatTabChangeEvent} tabChangeEvent
   * @memberof DatainputDynamicFormComponent
   */
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
    if (this.tabIndex) {
      this.getRecords();
    }
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
      },
      (error) => {
        this.error = error.statusText;
      }
    );
  }

  /**
   * getting sub title from child to parent component
   *
   * @param {*} title
   * @memberof DataInputComponent
   */
  formTitle(title) {
    this.title = title;
  }

  receiveRecords(tableData){
    this.records = tableData;
  }
  receiveCols(tableCols){
    this.cols = tableCols;
  }

  getRecords1() {
    this.http.get('assets/json/data.json').subscribe(data =>{
      this.records = data;
    })
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'beingWorkedBy', header: 'Being Worked By' },
      { field: 'RequestedBy', header: 'Requested By' },
      { field: 'status', header: 'Status' },
      { field: 'requestedDueDate', header: 'Due Date' },
    ];
  }
}
