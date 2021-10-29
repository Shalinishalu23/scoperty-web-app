import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCommentTableComponent } from './user-comment-table.component';
import { UserComment } from 'src/app/shared/models/datainput-model';

let userCmt: UserComment;
describe('UserCommentTableComponent', () => {
  let component: UserCommentTableComponent;
  let fixture: ComponentFixture<UserCommentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCommentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCommentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call addNewRow, onDelete, onRowEditInit methods', () => {
    component.addNewRow();
    component.onDelete(null);
    component.onRowEditInit(null);
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
    component.userCommentTable.emit(userComments);
  });

  it('should call onRowEditCancel method', () => {
    component.onRowEditCancel(userCmt, 1);
    component.clonedUserComments[userCmt.sl];
  });

  it('should call insertUserComments method', () => {
    component.userCommentsList = [{
      Employee: 'John',
      DateTime: '29/01/2021',
      Comment: 'User comment text'}]
      component.insertUserComments();
  });

});
