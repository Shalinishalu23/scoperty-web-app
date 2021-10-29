import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariableService } from 'src/app/services/global-variable.service';

/**
 *
 *
 * @export
 * @class SearchDynamicFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-search-dynamic-form',
  templateUrl: './search-dynamic-form.component.html',
  styleUrls: ['./search-dynamic-form.component.scss'],
})
export class SearchDynamicFormComponent implements OnInit {
  title: string;
  pageName: string;
  searchForm: FormGroup;
  displaySpinner: boolean = false;
  workload: any;
  memoCode: any;
  author: any;
  fieldArray: any;
  cols: any[];

  /**
   * Creates an instance of SearchDynamicFormComponent.
   * @param {Router} router
   * @param {FormBuilder} fb
   * @param {GlobalVariableService} globalVariableService
   * @memberof SearchDynamicFormComponent
   */
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public globalVariableService: GlobalVariableService
  ) {}

  /**
   *
   *
   * @memberof SearchDynamicFormComponent
   */
  ngOnInit(): void {
    this.pageName = this.router.url.split('/').pop();
    this.getStateDropdown();
    this.createFormBuilder();
  }

  /**
   *
   *
   * @memberof SearchDynamicFormComponent
   */
  createFormBuilder() {
    if(this.pageName == 'searchDrawingReview'){
    this.title = 'Drawing Review Search Form';
    this.searchForm = this.fb.group({
      Doc: '',
      Reviewer: '',
      PEC: ''
    });
    this.fieldArray = [
      { "label": "Doc Or P/N", "type": "select", "control": "Doc", "options": this.memoCode },
      { "label": "Reviewer", "type": "select", "control": "Reviewer", "options": this.author },
      { "label": "PEC or EC", "type": "select", "control": "PEC", "options": this.workload }
    ];
    this.cols = [
      { field: 'ID', header: 'ID' },
      { field: 'PECorEC', header: 'PEC or EC' },
      { field: 'NewDrawing', header: 'New Drawing' },
      { field: 'ReviewedBy', header: 'Reviewed By' },
      { field: 'Status', header: 'Status' },
      { field: 'CompleteDate', header: 'Complete Date' },
      { field: 'CommentsExits', header: 'Comments Exits' },
      { field: 'EverRejected', header: 'Ever Rejected' }
    ];
    }
    if(this.pageName == 'searchMemo') {
    this.title = 'Memo Search Form';
    this.searchForm = this.fb.group({
      MemoCode: '',
      Author: '',
      Workload: '',
    });
    this.fieldArray = [
      { label: "Memo Coder", "type": "select", "control": "MemoCode", "options": this.memoCode },
      { label: "Author", "type": "select", "control": "Author", "options": this.author },
      { label: "Workload", "type": "select", "control": "Workload", "options": this.workload }
    ];
    this.cols = [
      { field: 'Workload', header: 'Workload' },
      { field: 'Memo', header: 'Memo' },
      { field: 'Date', header: 'Date' },
      { field: 'Title', header: 'Title' },
      { field: 'Author', header: 'Author' }
    ];
    }
    if(this.pageName == 'searchTurnBack') {
    this.title = 'Turnback Search Form';
    this.searchForm = this.fb.group({
      WLID: '',
      WorkedBy: '',
      Task: '',
      Category: ''
    });
    this.fieldArray = [
      { "label": "WL ID#", "type": "select", "control": "WLID", "options": this.memoCode },
      { "label": "Worked By", "type": "select", "control": "WorkedBy", "options": this.author },
      { "label": "Task", "type": "select", "control": "Task", "options": this.workload },
      { "label": "Category", "type": "select", "control": "Category", "options": this.workload }
    ];
    this.cols = [
      { field: 'WLID', header: 'WL ID' },
      { field: 'Task', header: 'Task' },
      { field: 'WorkedBy', header: 'Worked By' },
      { field: 'Category', header: 'Category' },
      { field: 'ExpandedTurnbackInfo', header: 'Expanded Turnback Information' }
    ];
    }
  }

  /**
   *
   *
   * @memberof SearchDynamicFormComponent
   */
  getStateDropdown() {
    this.author = [
      { Id: 1, Description: 'Desc1' },
      { Id: 2, Description: 'Desc2' },
      { Id: 3, Description: 'Desc3' },
      { Id: 4, Description: 'Desc4' },
    ];
    this.memoCode = this.author;
    this.workload = this.author;
  }
}
