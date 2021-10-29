import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatainputDynamicFormComponent } from './datainput-dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilityService } from 'src/app/services/utility.service';
import { Configuration } from 'src/app/config/app-settings.config';
import { MessageService } from 'primeng/api';

import { MatTabChangeEvent } from '@angular/material/tabs';

let matTabChangeEvent : MatTabChangeEvent;
let createForm : FormGroup;
let date = new Date();

describe('DatainputDynamicFormComponent', () => {
  let component: DatainputDynamicFormComponent;
  let fixture: ComponentFixture<DatainputDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ DatainputDynamicFormComponent ],
      providers: [ UtilityService, Configuration, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatainputDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call createFormBuilder method', () => {
    component.userCommentsList = [];
    component.editRowData = 123;
    component.pageName = 'mainexpand';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'mainexpand';
    
    component.editRowData = 123;
    component.pageName = 'drawingreview';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'drawingreview';

    component.editRowData = 123;
    component.pageName = 'componentspecific';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'componentspecific';

    component.editRowData = 123;
    component.pageName = 'failureanalysis';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'failureanalysis';

    component.editRowData = 123;
    component.pageName = 'metallicdesign';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'metallicdesign';

    component.editRowData = 123;
    component.pageName = 'heatexchange';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'heatexchange';
    component.createFormBuilder();
        
    component.editRowData = 123;
    component.pageName = 'designreview';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'designreview';
    component.createFormBuilder();

    component.editRowData = 123;
    component.pageName = 'supplierrequest';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'supplierrequest';
    component.createFormBuilder();

    component.editRowData = 123;
    component.pageName = 'turnbacks';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'turnbacks';
    component.createFormBuilder();

    component.editRowData = 123;
    component.pageName = 'utrc';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'utrc';
    component.createFormBuilder();

    component.editRowData = 123;
    component.pageName = 'specification';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'specification';
    component.createFormBuilder();
    expect(component).toBeTruthy();
  });

  it('should call tabChanged method', () => {
    component.tabIndex = 0;
    // component.tabChanged(matTabChangeEvent);
    component.tabIndex = 1;
    component.getRecords();
  });

  it('should call convertToYYMMDD method', () => {
    // let date = '29/01/2021'
    component.convertToYYMMDD(date)
    expect(component).toBeTruthy();
  });

  it('should call saveForm method', () => {
    let fields =  [
      [
        { label: 'Being Worked By', type: 'select', control: 'BeingWorkedBy', options: [], mandatory: true }, 
        { label: 'Priority', type: 'select', control: 'Priority', options: [], mandatory: false  }, 
        { label: 'Input Date', type: 'date', control: 'InputDate' }, 
        { label: 'Schedule Days', type: 'select', control: 'ScheduleDays', options: [], }, 
        { label: 'Work in Start Date', type: 'date', control: 'WorkStartDate', }, 
        { label: 'Team ID', type: 'select', control: 'TeamTaskId', options: [], }, 
        { label: 'Work Complete Date', type: 'date', control: 'CompleteDate', },
      ]];
    let usrcmt = [{userName: 'John', comments: 'user comment text'}];
    
    component.editRowData = {Id: 1}
    component.editForm = true;
    component.userComments = [{userName: 'John', comments: 'user comment text'}]
    component.saveForm();
    component.fieldArray = fields;
    component.userComments = [{userName: 'John', comments: 'user comment text'}]
    expect(component.saveForm).toHaveBeenCalledTimes(1);
    // let newData = createForm.value;
    // newData.InputDate = date;
    // newData.WorkStartDate = date;
    // newData.CompleteDate = date;
    // expect(component).toBeTruthy();
  });

  it('should call Change Location method', () => {
    let msg = 'Record saved successfully!'
    component.changeLocation(msg);
  });close

  it('should call close method', () => {
    component.close();
  });

  it('should call receiveUserComment method', () => {
    component.userComments = [{userName: 'John', comments: 'user comment text'}]
    component.userTask = [{userName: 'John', Task: 'Testing'}]
    component.userDoc = [{userName: 'John', PastNumber: '76896', MOC: 'moc', ReviewedBy: 2}]
    component.receiveUserComment(component.userComments);
    component.receiveUserTask(component.userTask);
    component.receiveUserDoc(component.userDoc);
    expect(component).toBeTruthy();
  });

});
