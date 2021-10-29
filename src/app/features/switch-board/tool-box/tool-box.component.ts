import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 *
 *
 * @export
 * @class ToolBoxComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.scss'],
})
export class ToolBoxComponent implements OnInit {
  @Input() formName: any;
  toolBoxArray: Array<object> = [];
  pdfSrc: any;
  // src: any;

  /**
   * Creates an instance of ToolBoxComponent.
   * @memberof ToolBoxComponent
   */
  constructor(public router: Router) {
    // this.pdfSrc =
    //   'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  }

  ngOnInit(): void {
    this.getToolbox();
    // this.src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  }

  /**
   *
   *
   * @memberof ToolBoxComponent
   */
  getToolbox() {
    if (
      this.formName == 'drawingreview' ||
      this.formName == 'supplierrequest' ||
      this.formName == 'turnBacks'
    ) {
      this.toolBoxArray = [
        { name: 'Add/View Turnback', formName: 'turnbacks' },
        { name: 'View Std Work' },
        { name: 'View Folder' },
      ];
    } else if (this.formName == 'metallicdesign') {
      this.toolBoxArray = [
        { name: 'Add/View Turnback', formName: 'turnbacks' },
        { name: 'View Folder' },
        { name: 'Add/View Memos', formName: 'memos' },
        { name: 'View Archive',formName: 'archive' },
      ];
    } else if (
      this.formName == 'heatexchange' ||
      this.formName == 'componentspecific'
    ) {
      this.toolBoxArray = [
        { name: 'Add/View Turnback', formName: 'turnbacks' },
        { name: 'View Folder' },
        { name: 'Add/View Memos', formName: 'memos' },
        { name: 'Add/View LWR', formName: 'lwr' },
        { name: 'Add/View Micro Request', formName: 'micro' },
        { name: 'Make/View UTRC WRs', formName: 'utrc' },
        { name: 'Add Stored Hardware', formName: 'hardware' },
      ];
    } else if (this.formName == 'memos') {
      this.toolBoxArray = [{ name: 'Add HSER Memo Number', formName: 'hser' }];
    } else if (this.formName == 'turnbacks') {
      this.toolBoxArray = [{ name: 'Help', formName: 'help' }];
    } else if (this.formName == 'designreview') {
      this.toolBoxArray = [
        { name: 'Add/View Turnback', formName: 'turnbacks' },
        { name: 'View Folder' },
      ];
    } else {
      this.toolBoxArray = [
        { name: 'Add/View Turnback', formName: 'turnbacks' },
        { name: 'View Folder' },
        { name: 'Add/View Memos', formName: 'memos' },
        { name: 'Add/View LWR', formName: 'lwr' },
        { name: 'Add/View Micro Request', formName: 'micro' },
        { name: 'Make/View UTRC WRs', formName: 'utrc' },
        { name: 'Add/View POR Form', formName: 'poc' },
        { name: 'Add Stored Hardware', formName: 'hardware' },
        { name: 'View Archive',formName: 'archive' },
      ];
    }
  }

  /**
   *
   *
   * @param {*} formName
   * @memberof ToolBoxComponent
   */
  getToolBoxForm(formName) {
    if (formName == 'help') {
      // let Src
      // Src = './src/assets/docs/HelpTurnbacksAndEscapes.pdf';
    } else {
      this.router.navigate(['home/switchboard/' + formName]);
    }
  }
}
