import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { Configuration } from 'src/app/config/app-settings.config';
// import 'jspdf-autotable';
//require('jspdf-autotable');
// import jsPDF from 'jspdf';

// import 'jspdf-autotable';
// import * as jsPDF from 'jspdf';
// const jsPDF = require('jspdf');

/**
 *
 *
 * @export
 * @class UtilityService
 */
@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  /**
   * Creates an instance of UtilityService.
   * @param {HttpClient} http
   * @param {Configuration} configuration
   * @param {MessageService} messageService
   * @memberof UtilityService
   */
  constructor(
    public http: HttpClient,
    public configuration: Configuration,
    public messageService: MessageService
  ) {}

  public commonFormData = new BehaviorSubject<any>(null);
  public getcommonFormDataFromService = this.commonFormData.asObservable();

  /**
   *
   *
   * @param {*} data
   * @memberof UtilityService
   */
  public sendDataViaService(data) {
    this.commonFormData.next(data);
  }

  /**
   *
   *
   * @param {*} type
   * @return {*}
   * @memberof UtilityService
   */
  getResponse(type) {
    return this.http.get(this.configuration[type], { observe: 'response' });
  }

  /**
   *
   *
   * @return {*}
   * @memberof UtilityService
   */
  getPriority() {
    return this.http.get(this.configuration.getPriority, {
      observe: 'response',
    });
  }

  /**
   *
   *
   * @param {*} values
   * @param {*} type
   * @return {*}
   * @memberof UtilityService
   */
  deleteRequest(values, type) {
    return this.http.delete(this.configuration[type] + values);
  }

  /**
   *
   *
   * @param {*} values
   * @param {*} id
   * @param {*} type
   * @return {*}
   * @memberof UtilityService
   */
  updateRequest(values, id, type) {
    return this.http.put(this.configuration[type] + id, values);
  }

  /**
   *
   *
   * @param {*} values
   * @param {*} type
   * @return {*}
   * @memberof UtilityService
   */
  addRequest(values, type) {
    return this.http.post(this.configuration[type], values);
  }

  // public handleError(error: Response) {
  //   try {
  //     let errorO = {
  //       msg: (<any>error)._body + 'Shalu',
  //       status: error.status,
  //       code: error.status,
  //     };
  //     return observableThrowError(errorO);
  //   } catch (error) {}
  // }

  /**
   *
   *
   * @param {*} severity
   * @param {*} msg
   * @memberof UtilityService
   */
  displayAlert(severity, msg) {
    this.clearMessages();
    this.messageService.add({ severity: severity, detail: msg });
    // this.messageService.add({severity: severity, summary: title, detail: msg});
  }

  /**
   *
   *
   * @memberof UtilityService
   */
  clearMessages() {
    this.messageService.clear();
  }

  /**
   *
   *
   * @param {*} form
   * @memberof UtilityService
   */
  removeValidators(form) {
    form.reset();
    Object.keys(form.controls).forEach((key) => {
      form.get(key).setErrors(null);
    });
  }

  //// below code is working fine but getting error in console and cli
  /**
   *
   *
   * @param {*} cols
   * @param {*} data
   * @param {*} fileName
   * @memberof UtilityService
   */
  exportPdf(cols, data, fileName) {
    // var head = [['ID', 'Country', 'Rank', 'Capital']]
    // var body = [
    //   [1, 'Denmark', 7.526, 'Copenhagen'],
    //   [2, 'Switzerland', 7.509, 'Bern'],
    //   [3, 'Iceland', 7.501, 'Reykjavík'],
    //   [4, 'Norway', 7.498, 'Oslo'],
    //   [5, 'Finland', 7.413, 'Helsinki'],
    // ]
    // var doc = new jsPDF()
    // doc.autoTable({ head: head, body: body })
    // doc.output('dataurlnewwindow')
    // var jsPDF = require('jspdf');
    // require('jspdf-autotable');
    // import('jspdf').then((jsPDF) => {
    //   import('jspdf-autotable').then((x) => {
    //     const doc = new jsPDF.default(0, 0);
    //     doc.autoTable(cols, data);
    //     doc.save(fileName + '_' + new Date().getTime() + '.pdf');
    //   });
    // });
  }

  /**
   *
   *
   * @param {*} cols
   * @param {*} data
   * @param {*} fileName
   * @memberof UtilityService
   */
  exportExcel(cols, data, fileName) {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, fileName);
    });
  }

  /**
   *
   *
   * @param {*} buffer
   * @param {string} fileName
   * @memberof UtilityService
   */
  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
}
