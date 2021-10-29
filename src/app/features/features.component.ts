import { Component, HostBinding, OnInit } from '@angular/core';

/**
 *
 *
 * @export
 * @class FeaturesComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  sideBarOpen: boolean = true;
  isDark: boolean = false;

  /**
   *
   *
   * @memberof FeaturesComponent
   */
  ngOnInit(): void {}

  /**
   *
   *
   * @memberof FeaturesComponent
   */
  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  /**
   *
   *
   * @param {boolean} isDarkMode
   * @memberof FeaturesComponent
   */
  switchMode(isDarkMode: boolean) {
    this.isDark = isDarkMode;
  }
}
