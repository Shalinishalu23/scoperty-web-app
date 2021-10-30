import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { UtilityService } from 'src/app/services/utility.service';

/**
 *
 *
 * @export
 * @class SwitchBoardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-switch-board',
  templateUrl: './switch-board.component.html',
  styleUrls: ['./switch-board.component.scss'],
})
export class SwitchBoardComponent implements OnInit {
  error: string;
  loadDropDownType: string;
  displaySpinner: boolean = false;

  /**
   * Creates an instance of SwitchBoardComponent.
   * @param {Router} router
   * @param {UtilityService} utilityService
   * @param {GlobalVariableService} globalVariableService
   * @memberof SwitchBoardComponent
   */
  constructor(
    public router: Router,
    public utilityService: UtilityService,
    public globalVariableService: GlobalVariableService
  ) {}

  /**
   *
   *
   * @memberof SwitchBoardComponent
   */
  ngOnInit(): void {
    // this.loadDropdownData();
  }
  dataInput = [
    { name: '17,896,200 House numbers', formName: 'mainexpand' },
    { name: '1,072,734 Streets', formName: 'drawingreview' },
    { name: '11,579 Municipalities', formName: 'designreview' },
    { name: '388 Counties', formName: 'failureanalysis' },
  ];
  reports = [
    { name: 'Compare your neighborhood estimates', formName: 'pie' },
    { name: 'Find your pre-sale offers & Discover now ', formName: 'myjobs' },
    { name: 'Sell ​​right with Scoperty by your side', formName: 'alljobs' },
  ];
  search = [{ name: 'Near by', formName: 'searchDrawingReview' }];
  tools = [{ name: 'Services', formName: 'specification' }];
  lastClickedIndex;

  /**
   *
   *
   * @param {*} i
   * @param {*} formName
   * @memberof SwitchBoardComponent
   */
  changeActive(i, formName) {
    this.lastClickedIndex = i;
    this.router.navigate(['home/switchboard/' + formName]);
  }

  /**
   *
   *
   * @memberof SwitchBoardComponent
   */
  loadDropdownData() {
    if (!this.globalVariableService.getPriorityDD())
      this.getDropdownData('getPriority');
    if (!this.globalVariableService.getInputFromDD())
      this.getDropdownData('getInputFrom');
    if (!this.globalVariableService.getProductCategoryDD())
      this.getDropdownData('getProductCategory');
    if (!this.globalVariableService.getProgramModelDD())
      this.getDropdownData('getProgramModel');
    if (!this.globalVariableService.getTeamIdDD())
      this.getDropdownData('getTeamID');
    if (!this.globalVariableService.getTaskDD())
      this.getDropdownData('getTask');
    if (!this.globalVariableService.getStatusDD())
      this.getDropdownData('getStatus');
    if (!this.globalVariableService.getBeingWorkedByDD())
      this.getDropdownData('getBeingWorkBy');
    if (!this.globalVariableService.getScheduledDaysDD())
      this.getDropdownData('getScheduledays');
    if (!this.globalVariableService.getAnsComScoreDD())
      this.getDropdownData('getAnsComScore');
    if (!this.globalVariableService.getAnsDataScoreDD())
      this.getDropdownData('getAnsDataScore');
  }

  /**
   *
   *
   * @param {*} type
   * @memberof SwitchBoardComponent
   */
  getDropdownData(type) {
    this.displaySpinner = true;
    this.utilityService.getResponse(type).subscribe(
      (res) => {
        this.displaySpinner = false;
        switch (type) {
          case 'getPriority': {
            this.globalVariableService.setPriorityDD(res.body['Data']);
            break;
          }
          case 'getInputFrom': {
            this.globalVariableService.setInputFromDD(res.body['Data']);
            break;
          }
          case 'getProductCategory': {
            this.globalVariableService.setProductCategoryDD(res.body['Data']);
            break;
          }
          case 'getProgramModel': {
            this.globalVariableService.setProgramModelDD(res.body['Data']);
            break;
          }
          case 'getTeamID': {
            this.globalVariableService.setTeamIdDD(res.body['Data']);
            break;
          }
          case 'getTask': {
            this.globalVariableService.setTaskDD(res.body['Data']);
            break;
          }
          case 'getStatus': {
            this.globalVariableService.setStatusDD(res.body['Data']);
            break;
          }
          case 'getBeingWorkBy': {
            this.globalVariableService.setBeingWorkedByDD(res.body['Data']);
            break;
          }
          case 'getScheduledays': {
            this.globalVariableService.setScheduledDaysDD(res.body['Data']);
            break;
          }
          case 'getAnsComScore': {
            this.globalVariableService.setAnsComScoreDD(res.body['Data']);
            break;
          }
          case 'getAnsDataScore': {
            this.globalVariableService.setAnsDataScoreDD(res.body['Data']);
            break;
          }
          default: {
            break;
          }
        }
      },
      (error) => {
        this.displaySpinner = false;
        this.error = error.statusText;
      }
    );
  }
}
