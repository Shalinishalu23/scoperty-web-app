import { Component, OnInit } from '@angular/core';

/**
 *
 *
 * @export
 * @class FooterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyRightVersion: any;

  /**
   * Creates an instance of FooterComponent.
   * @memberof FooterComponent
   */
  constructor() { }

  /**
   *
   *
   * @memberof FooterComponent
   */
  ngOnInit(): void {
    this.copyRightVersion =  new Date().getUTCFullYear();
  }

}
