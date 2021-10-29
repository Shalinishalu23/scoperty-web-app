import { Component, EventEmitter, OnInit, Output,ElementRef } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

/**
 *
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter
  @Output() darkModeSwitched: EventEmitter<any> = new EventEmitter<boolean>();

  /**
   * Creates an instance of HeaderComponent.
   * @param {Router} router
   * @memberof HeaderComponent
   */
  constructor(public router: Router, public elementRef: ElementRef,) { }

  /**
   *
   *
   * @memberof HeaderComponent
   */
  ngOnInit() {
    // below for refresh toggle to set local stroage
     this.darkModeSwitched.emit(localStorage.getItem('theme') === 'theme-dark' ? false : true)
  }

  ngAfterViewInit() {
    var v = document.createElement("script");
    v.type = "text/javascript";
    v.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
    this.elementRef.nativeElement.appendChild(v);
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    this.elementRef.nativeElement.appendChild(s);
}

  /**
   *
   *
   * @memberof HeaderComponent
   */
  toggleSideBar() {
    this.toggleSideBarForMe.emit()
  }

  /**
   *
   *
   * @memberof HeaderComponent
   */
  logout() {
    localStorage.removeItem('theme');
    //check below session clear again
    localStorage.clear();
    this.router.navigate(['/']);

  }

  /**
   *
   *
   * @param {MatSlideToggleChange} { checked }
   * @memberof HeaderComponent
   */
  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    // below for refresh toggle to get local stroage
    localStorage.setItem('theme', checked ? 'theme-dark' : 'theme-light')
    // console.log('toggle', checked)
    this.darkModeSwitched.emit(checked)
  }
}
