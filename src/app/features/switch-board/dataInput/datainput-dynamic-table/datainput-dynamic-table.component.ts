import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { UtilityService } from 'src/app/services/utility.service';
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
  providers: [ConfirmationService],
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

  /**
   * Creates an instance of DatainputDynamicTableComponent.
   * @param {ConfirmationService} confirmationService
   * @param {UtilityService} utilityService
   * @memberof DatainputDynamicTableComponent
   */
  constructor(
    public confirmationService: ConfirmationService,
    public utilityService: UtilityService
  ) {}
  /**
   *
   *
   * @memberof DatainputDynamicTableComponent
   */
  ngOnInit(): void {
    this.getData = 'get' + this.tableFrom;
    this.delete = 'delete' + this.tableFrom;
    // if (this.tableFrom == 'mainExpand' || this.tableFrom == 'heatExchange') {
    //   this.getData = 'getWorkloads';
    //   this.delete = 'deleteWorkloads';
    // }
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
      message: 'Are you sure that you want to delete ' + item.Id + '?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.utilityService.deleteRequest(item.Id, this.delete).subscribe(
          (res) => {
            this.utilityService.displayAlert(
              'success',
              item.Id + ' Record Deleted'
            );
            this.getAllData();
          },
          (error) => {
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
    this.utilityService.getResponse(this.getData).subscribe(
      (res) => {
        this.tableData = res.body['Data'];
      },
      (error) => {
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

  exportExcel() {
    // below for testing
    this.utilityService.exportExcel(this.cols, this.tableData, 'filename');
  }

  exportPdf() {
    this.utilityService.exportPdf(this.cols, this.tableData, 'filename');
  }
}
