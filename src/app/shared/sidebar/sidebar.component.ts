import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

/**
 *
 *
 * @export
 * @class SidebarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  mailID: string;
  empDetails: any;
  /**
   * Creates an instance of SidebarComponent.
   * @memberof SidebarComponent
   */
  constructor(public utilityService: UtilityService) {
    // this.utilityService.getcommonFormDataFromService.subscribe((res) => {
    //  // this.empDetails= res.Data ? res.Data : ""
    //   // this.mailID =res? res.Data['EmailId'] : "";
    // });
  }

  /**
   *
   *
   * @memberof SidebarComponent
   */
  ngOnInit(): void {}
}
