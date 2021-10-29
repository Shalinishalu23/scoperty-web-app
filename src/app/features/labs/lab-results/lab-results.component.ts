import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LabResult } from 'src/app/shared/models/labRequest-model';

/**
 *
 *
 * @export
 * @class LabResultsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrls: ['./lab-results.component.scss'],
  providers: [MessageService],
})

export class LabResultsComponent implements OnInit {
  selectedItem: any;
  results: any;
  userName: string;
  clonedLabResults: { [s: string]: LabResult } = {};
  count = 1;
  delRow;
  labResults: Array<LabResult> = [];
  @Input() labResultList: any;

  cols: any;
  @Output() labTable = new EventEmitter();

  /**
   * Creates an instance of LabResultsComponent.
   * @param {MessageService} messageService
   * @memberof LabResultsComponent
   */
  constructor(public messageService: MessageService) {}

  /**
   *
   *
   * @memberof LabResultsComponent
   */
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
    this.insertLabResults();
  }

  /**
   *
   *
   * @memberof LabResultsComponent
   */
  addNewRow() {
    ++this.count;
    this.labResults.push({
      userName: this.userName,
      sl: this.count,
      date: new Date(),
      testNumber: '',
      results: '',
      disposition: '',
      partNumber: '',
      processNumber: '',
      specNumber: '',
      LabRequestId: null,
    });
  }

  /**
   *
   *
   * @param {LabResult} labResult
   * @memberof LabResultsComponent
   */
  onDelete(labResult: LabResult) {
    this.delRow = this.labResults.indexOf(labResult);
    this.labResults.splice(this.delRow, 1);
    this.labTable.emit(this.labResults);
  }

  /**
   *
   *
   * @param {LabResult} labResult
   * @memberof LabResultsComponent
   */
  onRowEditInit(labResult: LabResult) {
    this.clonedLabResults[labResult.sl] = { ...labResult };
  }

  /**
   *
   *
   * @param {LabResult} labResult
   * @memberof LabResultsComponent
   */
  onRowEditSave(labResult: LabResult) {
    delete this.clonedLabResults[labResult.sl];
    this.labTable.emit(this.labResults);
  }

  /**
   *
   *
   * @param {LabResult} labResult
   * @param {number} index
   * @memberof LabResultsComponent
   */
  onRowEditCancel(labResult: LabResult, index: number) {
    this.labResults[index] = this.clonedLabResults[labResult.sl];
    delete this.clonedLabResults[labResult.sl];
  }

  /**
   *
   *
   * @memberof LabResultsComponent
   */
  insertLabResults() {
    if (!this.labResultList) {
      this.labResults = [
        {
          sl: 1,
          date: new Date(),
          userName: this.userName,
          testNumber: null,
          results: '',
          disposition: '',
          partNumber: '',
          processNumber: '',
          specNumber: '',
          LabRequestId: null,
        },
      ];
    } else {
      this.labResultList.forEach((element) => {
        ++this.count;
        let obj = {
          sl: this.count,
          date: new Date(element.DateTime),
          userName: element.UserName,
          testNumber: element.TestNumber,
          results: element.Results,
          disposition: element.Disposition,
          partNumber: element.PartNumber,
          processNumber: element.ProcessNumber,
          specNumber: element.SpecNumber,
          LabRequestId: element.LabRequestId,
        };
        this.labResults.push(obj);
      });
    }

    this.results = [
      { label: 'Pass', value: 'Pass' },
      { label: 'Fail', value: 'Fail' },
    ];

    this.cols = [
      // { field: 'sl', header: 'Sl', isStatic: true },
      { field: 'date', header: 'Date' },
      { field: 'userName', header: 'User Name' },
      { field: 'testNumber', header: 'Test Number' },
      { field: 'results', header: 'Results' },
      { field: 'disposition', header: 'Disposition' },
      { field: 'partNumber', header: 'Part Number' },
      { field: 'processNumber', header: 'Process Number' },
      { field: 'specNumber', header: 'Spec Number' },
    ];
  }
}
