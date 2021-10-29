import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { UtilityService } from 'src/app/services/utility.service';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

/**
 *
 *
 * @export
 * @class DatainputDynamicTableComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-datainput-dynamic-table',
  templateUrl: './datainput-dynamic-table.component.html',
  styleUrls: ['./datainput-dynamic-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ConfirmationService, DatePipe],
})
export class DatainputDynamicTableComponent implements OnInit {
  @Input() tableData: any;
  @Input() tableFrom: any;
  @Input() title: string;
  @Input() cols: any = [];
  error: string;
  formDialog: boolean = false;
  editForm: boolean = true;
  editRowData: any;
  selectedItem: any;
  getData: any;
  delete: any;
  displaySpinner: boolean = false;

  /**
   * Creates an instance of DatainputDynamicTableComponent.
   * @param {ConfirmationService} confirmationService
   * @param {UtilityService} utilityService
   * @memberof DatainputDynamicTableComponent
   */
  constructor(
    public confirmationService: ConfirmationService,
    public utilityService: UtilityService,
    public dialog: MatDialog,
    public datePipe: DatePipe
  ) {}
  /**
   *
   *
   * @memberof DatainputDynamicTableComponent
   */
  ngOnInit(): void {
    this.getData = 'get' + this.tableFrom;
    this.delete = 'delete' + this.tableFrom;
    // this.getAllData();
  }
  /**
   *
   *
   * @param {*} item
   * @memberof DatainputDynamicTableComponent
   */
  editRecord(item) {
    this.editRowData = item;
    this.formDialog = true;
  }
  /**
   *
   *
   * @param {*} item
   * @memberof DatainputDynamicTableComponent
   */
  deleteRecord(item) {
    this.confirmationService.confirm({
      message:
        'Are you sure that you want to delete record ID ' + item.Id + '?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.displaySpinner = true;
        this.utilityService.deleteRequest(item.Id, this.delete).subscribe(
          (res) => {
            this.displaySpinner = false;
            this.utilityService.displayAlert(
              'success',
              ' Record ID ' + item.Id + ' has been Deleted'
            );
            this.getAllData();
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
   * @memberof DatainputDynamicTableComponent
   */
  getAllData() {
    this.displaySpinner = true;
    this.utilityService.getResponse(this.getData).subscribe(
      (res) => {
        this.displaySpinner = false;
        this.tableData = res.body['Data'];
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
   * @memberof DatainputDynamicTableComponent
   */
  hideDialog() {
    this.formDialog = false;
  }

  /**
   *
   *
   * @memberof DatainputDynamicTableComponent
   */
  exportExcel() {
    // below for testing
    this.utilityService.exportExcel(this.cols, this.tableData, 'filename');
  }

  /**
   *
   *
   * @memberof DatainputDynamicTableComponent
   */
  exportPdf() {
    this.utilityService.exportPdf(this.cols, this.tableData, 'filename');
  }
}
