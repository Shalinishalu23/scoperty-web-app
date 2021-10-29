import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

/**
 *
 *
 * @export
 * @class SearchDynamicTableComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-search-dynamic-table',
  templateUrl: './search-dynamic-table.component.html',
  styleUrls: ['./search-dynamic-table.component.scss'],
})
export class SearchDynamicTableComponent implements OnInit {
  @Input() cols: any = [];
  tableData: any;
  title: string;
  formDialog: boolean = false;

  /**
   * Creates an instance of SearchDynamicTableComponent.
   * @param {UtilityService} utilityService
   * @memberof SearchDynamicTableComponent
   */
  constructor(public utilityService: UtilityService) {}

  /**
   *
   *
   * @memberof SearchDynamicTableComponent
   */
  ngOnInit(): void {}

  /**
   *
   *
   * @memberof SearchDynamicTableComponent
   */
  exportExcel() {
    // below for testing
    this.tableData = [{ id: 'test' }];
    this.utilityService.exportExcel(this.cols, this.tableData, 'filename');
  }

  /**
   *
   *
   * @memberof SearchDynamicTableComponent
   */
  exportPdf() {
    this.utilityService.exportPdf(this.cols, this.tableData, 'filename');
  }
}
