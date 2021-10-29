import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { element } from 'protractor';
import { UserComment } from 'src/app/shared/models/datainput-model';

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
  userName: string;
  clonedUserComments: { [s: string]: UserComment } = {};
  count = 1;
  delRow;
  userComments: Array<UserComment> = [];
  @Input() userCommentsList: any;
  cols: any;
  @Output() userCommentTable = new EventEmitter();

  /**
   * Creates an instance of UserCommentTableComponent.
   * @memberof UserCommentTableComponent
   */
  constructor() {}

  /**
   *
   *
   * @memberof UserCommentTableComponent
   */
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
    this.insertUserComments();
  }

  /**
   *
   *
   * @memberof UserCommentTableComponent
   */
  addNewRow() {
    ++this.count;
    this.userComments.push({
      userName: this.userName,
      sl: this.count,
      date: new Date(),
      comments: '',
    });
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

  insertUserComments() {
    if (!this.userCommentsList) {
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

    this.cols = [
      // { field: 'sl', header: 'Sl', isStatic: true },
      { field: 'date', header: 'Date of entry' },
      { field: 'userName', header: 'User ID' },
      { field: 'comments', header: 'Comment' },
    ];
  }
}
