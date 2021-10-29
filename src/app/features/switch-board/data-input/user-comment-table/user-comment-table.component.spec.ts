import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCommentTableComponent } from './user-comment-table.component';
import { UserComment } from 'src/app/shared/models/datainput-model';


import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilityService } from 'src/app/services/utility.service';
import { Configuration } from 'src/app/config/app-settings.config';
import { MessageService } from 'primeng/api';
import {MatDialogModule} from '@angular/material/dialog';

let userCmt: UserComment;

describe('UserCommentTableComponent', () => {
  let component: UserCommentTableComponent;
  let fixture: ComponentFixture<UserCommentTableComponent>;
  var userComments = {
      sl: 1,
      date: new Date(),
      userName: 'John',
      comments: '',
    }
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule, MatDialogModule ],
      declarations: [ UserCommentTableComponent ],
      providers: [ UtilityService, Configuration, MessageService ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCommentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call addNewRow, onDelete, onRowEditInit methods', () => {
    let usrTask = [{task: 'testing'},{task: 'test'}];
    component.userTask = usrTask;
    component.lastRow = {sl: 2, comments: 'status complete', userName: 'John'};
    component.addNewRow();
    component.addNewRowTask();

    component.lastRow.length = 0;
    component.addNewRow();
    component.addNewRowTask();
    
    component.onDelete(userComments);
    component.onRowEditInit(userComments);
    expect(component).toBeTruthy();
  });

  it('should call onRowEditSave method', () => {
    let userComments = [
      {
        sl: 1,
        date: new Date(),
        userName: 'John',
        comments: '',
      },
    ];
    component.onRowEditSave(userCmt);
    delete component.clonedUserComments[userCmt.sl];
    component.userCommentTable.emit(userComments);
  });

  it('should call onRowEditCancel method', () => {
    component.onRowEditCancel(userCmt, 1);
    component.userComments[1] = component.clonedUserComments[userCmt.sl];
    delete component.clonedUserComments[userCmt.sl];
  });

  it('should call insertUserComments method', () => {
      component.userCommentsList = []
      component.insertUserComments();
      component.userCommentsList = [{
      Employee: 'John',
      DateTime: '29/01/2021',
      Comment: 'User comment text'}]
      component.insertUserComments();
  });

  it('should call inserTaskComments method', () => {
    component.tableFrom = 'designreview';
    component.inserTaskComments();
    component.tableFrom = 'failureanalysis';
    component.inserTaskComments();
    component.tableFrom = 'componentspecific'
    component.inserTaskComments();
    component.tableFrom = 'heatexchange'
    component.inserTaskComments();
  });

});
