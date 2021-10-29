import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { UtilityService } from 'src/app/services/utility.service';

/**
 *
 *
 * @export
 * @class LabsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss'],
})

export class LabsComponent implements OnInit {
  // labWorkForm: FormGroup;
  getErrorMessage = 'Field cant be empty';
  getAllRecords: any;
  tabIndex = 0;
  displaySpinner: boolean = false;
  error: string;
  requestedBy: any;
  priority: any;
  update: any;
  engineer: any;
  technician: any;
  labRequestedID: any;
  jobCategoryId: any;
  parts: any;

  labRequestDropdowns = [
    'getRequestedBy',
    'getPriority',
    'getEngineer',
    'getTechnicians',
    'getJobCategoryId',
    'getParts',
  ];

  /**
   * Creates an instance of LabsComponent.
   * @param {FormBuilder} fb
   * @param {UtilityService} utilityService
   * @memberof LabsComponent
   */
  constructor(public fb: FormBuilder, public utilityService: UtilityService) {}

  /**
   *
   *
   * @memberof LabsComponent
   */
  ngOnInit(): void {}

  /**
   *
   *
   * @param {MatTabChangeEvent} tabChangeEvent
   * @memberof LabsComponent
   */
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
    this.utilityService.getResponse('getAllLabRequest').subscribe(
      (res) => {
        this.getAllRecords = res.body['Data'];
      },
      (error) => {
        // this.error = error.statusText;
      }
    );
  }
}
