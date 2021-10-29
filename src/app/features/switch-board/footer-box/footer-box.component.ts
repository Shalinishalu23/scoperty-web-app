import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 *
 *
 * @export
 * @class FooterBoxComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-footer-box',
  templateUrl: './footer-box.component.html',
  styleUrls: ['./footer-box.component.scss'],
})

export class FooterBoxComponent implements OnInit {
  footerBoxArray: Array<object> = [];
  @Input() tableFrom: any;
  mailText: string = '';

  /**
   * Creates an instance of FooterBoxComponent.
   * @param {Router} router
   * @memberof FooterBoxComponent
   */
  constructor(public router: Router) {}

  /**
   *
   *
   * @memberof FooterBoxComponent
   */
  ngOnInit(): void {
    this.getFooterbox();
  }

  /**
   *
   *
   * @memberof FooterBoxComponent
   */
  getFooterbox() {
    if (
      this.tableFrom == 'mainexpand' ||
      this.tableFrom == 'componentspecific' ||
      this.tableFrom == 'turnBacks' ||  
      this.tableFrom == 'failureanalysis' || 
      this.tableFrom == 'heatexchange' ||
      this.tableFrom == 'metallicdesign'
    ) {
      this.footerBoxArray = [
        { name: 'Send E-mail', formName: 'sendMail' },
        // { name: 'Copy Record' },
        // { name: 'Go To Main', formName: '' },
        { name: 'Go To PSR Form' ,formName: 'psr' },
        // { name: 'Workload Search' },
      ];
    } else if (
      this.tableFrom == 'drawingreview' ||
      this.tableFrom == 'specifications'
    ) {
      this.footerBoxArray = [
        { name: 'View All Drawing Review Jobs' },
        { name: 'Monthly Drawing Review Metrics' },
        // { name: 'Search Drawing Review Tasks', formName: '' },
        { name: 'Send E-mail', formName: 'sendMail' },
        { name: 'Bulk load' },
      ];
    } else {
      this.footerBoxArray = [
        // { name: 'View Only Open Drawing Review Jobs' },
        // { name: 'Monthly Drawing Review' },
        // { name: 'Search Drawing Review Tasks', formName: '' },
        // { name: 'Send E-mail', formName: 'sendMail' },
        // { name: 'Bulk load' },
      ];
    }
  }

  /**
   *
   *
   * @param {*} i
   * @param {*} formName
   * @memberof FooterBoxComponent
   */
  getFooterValue(i, formName) {
    let subject = 'Testing';
    if (formName == 'sendMail') {
      this.mailText = 'mailto:Shalini.M@ltts.com?subject=' + subject;
      window.location.href = this.mailText;
      //   this.mailText =
      //   'mailto:Shalini.M@ltts.com?subject=files&body=' + this.links.join(' ,');
      // window.location.href = this.mailText;
      // href="mailto:someone@example.com?Subject=Hello%20again"
    } else {
      this.router.navigate(['home/switchboard/' + formName]);
    }
  }
}
