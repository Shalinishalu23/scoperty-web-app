import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs'
import { metallicDesignModel } from 'src/app/shared/models/datainput-model'

/**
 *
 *
 * @export
 * @interface PeriodicElement
 */

@Component({
  selector: 'app-metallic-design',
  templateUrl: './metallic-design.component.html',
  styleUrls: ['./metallic-design.component.scss'],
})
export class MetallicDesignComponent implements OnInit {
  title: string = 'Metallic Design Limits Workload Form';
  formName: string = 'metallicDesign';
  tabIndex: number = 0;
  records: metallicDesignModel[] = [];
  cols: any;

  constructor() {}

  ngOnInit(): void {
    // this.getRecords();
  }

  // getRecords() {
  //   this.records = [
  //     {
  //       id: '3242',
  //       beingWorkedBy: 'John',
  //       RequestedBy: 'requested user',
  //       PartName: 'Frame',
  //       status: 'Complete',
  //       requestedDueDate: '2020-10-21',
  //       Telephone: '860-222-3333',
  //       ChargeNumber: 'A01245',
  //       Priority: 1,
  //       DateStarted: '2020-11-16',
  //       RequestedByDate: '2021-06-02',
  //       DateCompleted: '2021-02-16',
  //       Engineer: 'xyz',
  //       Quantity: 2,
  //     },
  //     {
  //       id: '3243',
  //       beingWorkedBy: 'John',
  //       RequestedBy: 'requested user',
  //       PartName: 'Stator',
  //       status: 'On Hold',
  //       requestedDueDate: '2020-11-22',
  //       Telephone: '860-222-3332',
  //       ChargeNumber: 'D01242',
  //       Priority: 1,
  //       DateStarted: '2020-11-23',
  //       RequestedByDate: '2021-06-02',
  //       DateCompleted: '2021-02-10',
  //       Engineer: 'xyz',
  //       Quantity: 2,
  //     },
  //     {
  //       id: '3243',
  //       beingWorkedBy: 'John',
  //       RequestedBy: 'requested user',
  //       PartName: 'Stator',
  //       status: 'On Hold',
  //       requestedDueDate: '2020-11-22',
  //       Telephone: '860-222-3332',
  //       ChargeNumber: 'D01242',
  //       Priority: 1,
  //       DateStarted: '2020-11-23',
  //       RequestedByDate: '2021-06-02',
  //       DateCompleted: '2021-02-10',
  //       Engineer: 'xyz',
  //       Quantity: 2,
  //     }
  //   ]

  //   this.cols = [
  //     { field: 'id', header: 'ID' },
  //     { field: 'beingWorkedBy', header: 'Being Worked By' },
  //     { field: 'RequestedBy', header: 'Requested By' },
  //     { field: 'status', header: 'Status' },
  //     { field: 'requestedDueDate', header: 'Due Date' },
  //   ];

  // }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
    if(this.tabIndex){
      // this.getRecords();
    }
  }
}
