import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { UtilityService } from 'src/app/services/utility.service';

/**
 *
 *
 * @export
 * @class ViewLabworkComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-view-labwork',
  templateUrl: './view-labwork.component.html',
  styleUrls: ['./view-labwork.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ConfirmationService],
})
export class ViewLabworkComponent implements OnInit {
  @Input() allRecords: any;
  @Input() requestedBy: any;
  cols: any;
  selectedItem: any;
  formDialog: boolean = false;
  error: string;
  editForm: boolean = true;
  editRowData: any;
  displaySpinner: boolean = false;

  /**
   * Creates an instance of ViewLabworkComponent.
   * @param {ConfirmationService} confirmationService
   * @param {UtilityService} utilityService
   * @memberof ViewLabworkComponent
   */
  constructor(
    public confirmationService: ConfirmationService,
    public utilityService: UtilityService
  ) {}

  /**
   *
   *
   * @memberof ViewLabworkComponent
   */
  ngOnInit(): void {
    this.cols = [
      { field: 'Id', header: 'ID' },
      { field: 'FromDepartment', header: 'From Department' },
      { field: 'RequestedById', header: 'Requested By' },
      { field: 'DateReceived', header: 'Date Received' },
      { field: 'RequestedByDate', header: 'Requested By Date' },
      { field: 'Quantity', header: 'Quantity' },
    ];
    this.getAllLabRequests();
  }

  /**
   *
   *
   * @param {*} item
   * @memberof ViewLabworkComponent
   */
  editRecord(item) {
    // this.showEdit.emit(item);
    this.editRowData = item;
    this.formDialog = true;
  }

  /**
   *
   *
   * @param {*} item
   * @memberof ViewLabworkComponent
   */
  deleteRecord(item) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete record ID ' + item.Id + '?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.displaySpinner = true;
        this.utilityService
          .deleteRequest(item.Id, 'deleteLabRequest')
          .subscribe(
            (res) => {
              this.displaySpinner = false;
              let deleteSuccessMsg = 'You have deleted Lab work ID :' + item.Id;
              this.utilityService.displayAlert('success', deleteSuccessMsg);
              this.getAllLabRequests();
            },
            (error) => {
              this.displaySpinner = false;
              this.error = error.statusText;
            }
          );
      },
      reject: () => {},
    });
  }

  /**
   *
   *
   * @memberof ViewLabworkComponent
   */
  hideDialog() {
    this.formDialog = false;
  }

  /**
   *
   *
   * @memberof ViewLabworkComponent
   */
  saveProduct() {}

  /**
   *
   *
   * @memberof ViewLabworkComponent
   */
  getAllLabRequests() {
    this.displaySpinner = true;
    this.utilityService.getResponse('getAllLabRequest').subscribe(
      (res) => {
        this.displaySpinner = false;
        this.allRecords = res.body['Data'];
      },
      (error) => {
        this.displaySpinner = false;
        this.error = error.statusText;
      }
    );
  }

  /**
   *
   *
   * @memberof ViewLabworkComponent
   */
  exportExcel() {
    this.utilityService.exportExcel(this.cols, this.allRecords, 'filename');
  }

  /**
   *
   *
   * @memberof ViewLabworkComponent
   */
  exportPdf() {
    this.utilityService.exportPdf(this.cols, this.allRecords, 'filename');
  }
}
