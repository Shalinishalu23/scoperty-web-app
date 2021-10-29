import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { mainExpandModel } from 'src/app/shared/models/datainput-model';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-main-expand',
  templateUrl: './main-expand.component.html',
  styleUrls: ['./main-expand.component.scss'],
})
export class MainExpandComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup;
  title: string = 'Materials Engineering Expanded Workload Form';
  formName: string = 'mainExpand';
  footerButtonsArray: Array<object> = [];
  error: string;
  tabIndex: number = 0;
  // records: mainExpandModel[] = [];
  records: any; // make this as mainexpandmodel
  cols: any;

  constructor(public router: Router, public utilityService: UtilityService) {}

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'beingWorkedBy', header: 'Being Worked By' },
      { field: 'requester', header: 'Requested By' },
      { field: 'teamTaskId', header: 'Team ID' },
      { field: 'requestedDueDate', header: 'Due Date' },
    ];

    this.footerButtons();
    this.getAllLabRequests();
  }

  getAllLabRequests() {
    this.utilityService.getResponse('getWorkloads').subscribe(
      (res) => {
        this.records = res.body;
      },
      (error) => {
        this.error = error.statusText;
      }
    );
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
    if (this.tabIndex) {
      this.getAllLabRequests();
    }
  }

  footerButtons() {
    this.footerButtonsArray = [
      { name: 'Send E-mail' },
      { name: 'Copy Record' },
      { name: 'Go To Main', formName: '' },
      { name: 'Go To PSR Form' },
      { name: 'Workload Search' },
    ];
  }

  getFooterValue(i, formName) {
    this.router.navigate(['home/switchboard/' + formName]);
  }

}
