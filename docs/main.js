(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Collins\scoperty-web-app\src\main.ts */"zUnb");


/***/ }),

/***/ "0e1J":
/*!*****************************************************!*\
  !*** ./src/app/features/features-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeaturesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRoutingModule", function() { return FeaturesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts/contacts.component */ "SvMc");
/* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features.component */ "mXFZ");






const routes = [
    {
        path: '',
        component: _features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | features-dashboard-dashboard-module */ "features-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../features/dashboard/dashboard.module */ "IAk5")).then((m) => m.DashboardModule),
            },
            {
                path: 'switchboard',
                loadChildren: () => __webpack_require__.e(/*! import() | features-switch-board-switch-board-module */ "features-switch-board-switch-board-module").then(__webpack_require__.bind(null, /*! ../features/switch-board/switch-board.module */ "zqVr")).then((m) => m.SwitchBoardModule),
            },
            {
                path: 'contacts',
                component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"],
            },
            {
                path: 'reviews',
                component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"],
            },
        ],
    },
];
/**
 *
 *
 * @export
 * @class FeaturesRoutingModule
 */
class FeaturesRoutingModule {
}
FeaturesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeaturesRoutingModule });
FeaturesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeaturesRoutingModule_Factory(t) { return new (t || FeaturesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeaturesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");









/**
 *
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
class HeaderComponent {
    /**
     * Creates an instance of HeaderComponent.
     * @param {Router} router
     * @memberof HeaderComponent
     */
    constructor(router, elementRef) {
        this.router = router;
        this.elementRef = elementRef;
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.darkModeSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isPrint = false;
    }
    /**
     *
     *
     * @memberof HeaderComponent
     */
    ngOnInit() {
        // below for refresh toggle to set local stroage
        this.isPrint =
            localStorage.getItem('theme') === 'theme-dark' ? true : false;
        this.darkModeSwitched.emit(localStorage.getItem('theme') === 'theme-dark' ? true : false);
    }
    ngAfterViewInit() {
        var v = document.createElement('script');
        v.type = 'text/javascript';
        v.innerHTML =
            "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
        this.elementRef.nativeElement.appendChild(v);
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src =
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        this.elementRef.nativeElement.appendChild(s);
    }
    /**
     *
     *
     * @memberof HeaderComponent
     */
    toggleSideBar() {
        this.toggleSideBarForMe.emit();
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
    onDarkModeSwitched({ checked }) {
        // below for refresh toggle to get local stroage
        localStorage.setItem('theme', checked ? 'theme-dark' : 'theme-light');
        // console.log('toggle', checked)
        this.darkModeSwitched.emit(checked);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { toggleSideBarForMe: "toggleSideBarForMe", darkModeSwitched: "darkModeSwitched" }, decls: 30, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["color", "primary"], ["mat-icon-button", "", 3, "click"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "flex-end"], ["fxLayout", "row", "fxLayout", "20px"], [3, "checked", "change"], ["id", "google_translate_element"], ["mat-icon-button", "", "routerLinkActive", "list-item-active", "routerLink", "/dashboard"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.toggleSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The Pre-Market for Real Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "brightness_4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-slide-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderComponent_Template_mat_slide_toggle_change_13_listener($event) { return ctx.onDarkModeSwitched($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_26_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isPrint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]], styles: ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { toggleSideBarForMe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], darkModeSwitched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "A1CT":
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_config_app_settings_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/app-settings.config */ "YaHV");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");






// import 'jspdf-autotable';
//require('jspdf-autotable');
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import * as jsPDF from 'jspdf';
// const jsPDF = require('jspdf');
/**
 *
 *
 * @export
 * @class UtilityService
 */
class UtilityService {
    /**
     * Creates an instance of UtilityService.
     * @param {HttpClient} http
     * @param {Configuration} configuration
     * @param {MessageService} messageService
     * @memberof UtilityService
     */
    constructor(http, configuration, messageService) {
        this.http = http;
        this.configuration = configuration;
        this.messageService = messageService;
        this.commonFormData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getcommonFormDataFromService = this.commonFormData.asObservable();
    }
    /**
     *
     *
     * @param {*} data
     * @memberof UtilityService
     */
    sendDataViaService(data) {
        this.commonFormData.next(data);
    }
    /**
     *
     *
     * @param {*} type
     * @return {*}
     * @memberof UtilityService
     */
    getResponse(type) {
        return this.http.get(this.configuration[type], { observe: 'response' });
    }
    /**
     *
     *
     * @return {*}
     * @memberof UtilityService
     */
    getPriority() {
        return this.http.get(this.configuration.getPriority, {
            observe: 'response',
        });
    }
    /**
     *
     *
     * @param {*} values
     * @param {*} type
     * @return {*}
     * @memberof UtilityService
     */
    deleteRequest(values, type) {
        return this.http.delete(this.configuration[type] + values);
    }
    /**
     *
     *
     * @param {*} values
     * @param {*} id
     * @param {*} type
     * @return {*}
     * @memberof UtilityService
     */
    updateRequest(values, id, type) {
        return this.http.put(this.configuration[type] + id, values);
    }
    /**
     *
     *
     * @param {*} values
     * @param {*} type
     * @return {*}
     * @memberof UtilityService
     */
    addRequest(values, type) {
        return this.http.post(this.configuration[type], values);
    }
    // public handleError(error: Response) {
    //   try {
    //     let errorO = {
    //       msg: (<any>error)._body + 'Shalu',
    //       status: error.status,
    //       code: error.status,
    //     };
    //     return observableThrowError(errorO);
    //   } catch (error) {}
    // }
    /**
     *
     *
     * @param {*} severity
     * @param {*} msg
     * @memberof UtilityService
     */
    displayAlert(severity, msg) {
        this.clearMessages();
        this.messageService.add({ severity: severity, detail: msg });
        // this.messageService.add({severity: severity, summary: title, detail: msg});
    }
    /**
     *
     *
     * @memberof UtilityService
     */
    clearMessages() {
        this.messageService.clear();
    }
    /**
     *
     *
     * @param {*} form
     * @memberof UtilityService
     */
    removeValidators(form) {
        form.reset();
        Object.keys(form.controls).forEach((key) => {
            form.get(key).setErrors(null);
        });
    }
    //// below code is working fine but getting error in console and cli
    /**
     *
     *
     * @param {*} cols
     * @param {*} data
     * @param {*} fileName
     * @memberof UtilityService
     */
    exportPdf(cols, data, fileName) {
        // var head = [['ID', 'Country', 'Rank', 'Capital']]
        // var body = [
        //   [1, 'Denmark', 7.526, 'Copenhagen'],
        //   [2, 'Switzerland', 7.509, 'Bern'],
        //   [3, 'Iceland', 7.501, 'Reykjavík'],
        //   [4, 'Norway', 7.498, 'Oslo'],
        //   [5, 'Finland', 7.413, 'Helsinki'],
        // ]
        // var doc = new jsPDF()
        // doc.autoTable({ head: head, body: body })
        // doc.output('dataurlnewwindow')
        // var jsPDF = require('jspdf');
        // require('jspdf-autotable');
        // import('jspdf').then((jsPDF) => {
        //   import('jspdf-autotable').then((x) => {
        //     const doc = new jsPDF.default(0, 0);
        //     doc.autoTable(cols, data);
        //     doc.save(fileName + '_' + new Date().getTime() + '.pdf');
        //   });
        // });
    }
    /**
     *
     *
     * @param {*} cols
     * @param {*} data
     * @param {*} fileName
     * @memberof UtilityService
     */
    exportExcel(cols, data, fileName) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(data);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, fileName);
        });
    }
    /**
     *
     *
     * @param {*} buffer
     * @param {string} fileName
     * @memberof UtilityService
     */
    saveAsExcelFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_config_app_settings_config__WEBPACK_IMPORTED_MODULE_3__["Configuration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
UtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_config_app_settings_config__WEBPACK_IMPORTED_MODULE_3__["Configuration"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // baseUrl: 'https://localhost:44359/collins/',
    baseUrl: 'http://192.168.34.232:8082/collins/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material-module */ "qAUw");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-routing.module */ "Sj5B");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "sRhs");









/**
 *
 *
 * @export
 * @class SharedModule
 */
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_routing_module__WEBPACK_IMPORTED_MODULE_6__["SharedRoutingModule"],
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModulesModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_routing_module__WEBPACK_IMPORTED_MODULE_6__["SharedRoutingModule"],
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModulesModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_routing_module__WEBPACK_IMPORTED_MODULE_6__["SharedRoutingModule"],
                    src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModulesModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModule"],
                ],
                exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sj5B":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
/**
 *
 *
 * @export
 * @class SharedRoutingModule
 */
class SharedRoutingModule {
}
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "SvMc":
/*!*********************************************************!*\
  !*** ./src/app/features/contacts/contacts.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");














function ContactsComponent_div_0_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-subtitle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " LIKE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " SHARE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", card_r4.cols)("rowspan", card_r4.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r4.sub, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r4.content, " ");
} }
function ContactsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsComponent_div_0_mat_grid_tile_2_Template, 25, 6, "mat-grid-tile", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.cards));
} }
function ContactsComponent_div_1_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", card_r7.cols)("rowspan", card_r7.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r7.tit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r7.subtit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r7.con, " ");
} }
function ContactsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsComponent_div_1_mat_grid_tile_2_Template, 20, 7, "mat-grid-tile", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.cards));
} }
function ContactsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The pre-market for real estate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " kontakt@scoperty.de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " call");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " +49 (0) 89 2000 297 50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "not_interested");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Contradiction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Companies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "about us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " For brokers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Blog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Career ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "advisory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Mortgage lending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Sell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactsComponent {
    constructor(breakpointObserver, router) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ matches }) => {
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 },
                ];
            }
            return [
                {
                    title: 'WORLD',
                    cols: 1,
                    rows: 1,
                    content: 'This platform values ​​the value of your home',
                    sub: 'Buying',
                    tit: 'Eva, buyer from Cologne',
                    subtit: ' Your Home | Starts with Scoperty',
                    img: 'https://scoperty.de/assets/images/home-page/reviewers/eva/eva.webp',
                    con: 'Here Munich residents can see what their home is worth',
                },
                {
                    title: 'Frankfurter Allgemeine',
                    cols: 1,
                    rows: 1,
                    content: 'Bidding for a villa in the neighborhood',
                    sub: 'selling',
                    tit: 'Joe, seller from Berlin',
                    subtit: ' Your Real Estate | Starts with Scoperty',
                    img: 'https://scoperty.de/assets/images/home-page/reviewers/gregor/gregor_jblnvq_c_scale,w_1474.webp',
                    con: 'I found a option of contacting owners simply and ananomously via Scoperty',
                },
                {
                    title: 'Southgerman newspaper',
                    cols: 1,
                    rows: 1,
                    content: 'Real estate costs more and more. But there are clear differences',
                    sub: 'Rent',
                    tit: 'Venisha, search for home from Hamburg',
                    subtit: '  Your Broker Search | Starts with Scoperty',
                    img: 'https://scoperty.de/assets/images/home-page/reviewers/joerg/joerg_ti3nep_c_scale,w_1539.webp',
                    con: ' Bidding for a villa in the neighborhood',
                },
                {
                    title: 'Real Estate Newspaper',
                    cols: 1,
                    rows: 1,
                    content: 'Scoperty now active nationwide',
                    sub: 'your Property Valuation',
                    tit: 'Shalu, land lord from Frankfurt',
                    subtit: ' Your Property Purchase | Starts with Scoperty',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtWSz8Txn8dd0TVWb-8H_bHEAtN3yrG6TSA&usqp=CAU',
                    con: 'Real estate costs more and more. But there are clear differences',
                },
                {
                    title: 'Evening newspaper Munich',
                    cols: 1,
                    rows: 1,
                    content: 'Here Munich residents can see what their home is worth',
                    sub: 'Property Valuation',
                    tit: 'Lalli , from Erfurt',
                    subtit: 'Your Property Purchase| Starts with Scoperty',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRug2LrwSJZYGJVJDuOy0mENDzJPPtsC_XZig&usqp=CAU',
                    con: ' Scoperty now active nationwide',
                },
                {
                    title: 'newspaper Munich',
                    cols: 1,
                    rows: 1,
                    content: 'Here Munich  home is worth',
                    sub: 'Property Selling',
                    tit: 'Moully , from Paris',
                    subtit: 'Your Property Selling| Starts with Scoperty',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDw9fHlqz1ABB6xRwbO-u9osD3_OEiNl69g&usqp=CAU',
                    con: 'Scoperty now everywhere',
                },
            ];
        }));
    }
    ngOnInit() {
        this.pageName = this.router.url.split('/').pop();
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 14, vars: 3, consts: [["class", "grid-container", 4, "ngIf"], ["class", "cardWrap", "fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAligmnet", "space-between center", "fxLayoutGap", "20px", "fxLayout.md", "column", "fxFlex.md", "50", "fxLayout.xs", "column", 4, "ngIf"], [1, "fixed", 2, "background-color", "#3dc988", "padding", "4px"], ["href", "https://www.facebook.com/scoperty", "target", "blank"], ["alt", "Collins Logo", "src", "/assets/img/facebook.png", 2, "width", "100px", "height", "27px", "object-fit", "scale-down"], ["href", "https://www.instagram.com/scoperty_de/?hl=de", "target", "blank"], ["alt", "Collins Logo", "src", "/assets/img/insta.png", 2, "width", "100px", "height", "27px", "object-fit", "scale-down"], ["href", "https://www.linkedin.com/company/scoperty/", "target", "blank"], ["alt", "Collins Logo", "src", "/assets/img/linkedIn.png", 2, "width", "100px", "height", "27px", "object-fit", "scale-down"], ["href", "https://www.google.com", "target", "blank"], ["alt", "Collins Logo", "src", "/assets/img/twitter.png", 2, "width", "100px", "height", "27px", "object-fit", "scale-down"], ["alt", "Collins Logo", "src", "/assets/img/youTube.png", 2, "width", "100px", "height", "27px", "object-fit", "scale-down"], [1, "grid-container"], ["cols", "2", "rowHeight", "200px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], [2, "color", "#3dc988"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [2, "color", "#6ac49a"], [1, "dashboard-card-content"], [2, "color", "#077a45"], ["mat-button", "", 2, "background-color", "blue", "color", "white"], ["mat-button", "", 2, "background-color", "green", "color", "white"], ["cols", "2", "rowHeight", "500px"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAligmnet", "space-between center", "fxLayoutGap", "20px", "fxLayout.md", "column", "fxFlex.md", "50", "fxLayout.xs", "column", 1, "cardWrap"], ["fxLayout", "column", "fxFlex", "50", "fxLayoutGap", "10px", "fxLayout.xs", "column", "fxLayout.lt-md", "column"], ["fxFlex.lt-md", "100", "fxFlex", "50", 1, "mat-elevation-z8"], ["alt", "Collins Logo", "src", "/assets/img/scoperty.jpg", 2, "width", "200px", "height", "25px", "object-fit", "scale-down"], [2, "color", "black"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", "fxLayoutGap", "10px"], ["alt", "Collins Logo", "src", " https://scoperty.de/assets/images/home-page/intargia-badge.png", 2, "width", "180px", ";\n                    object-fit", "scale-down"], ["fxLayout", "column", "fxFlex", "52", "fxLayoutGap", "10px", "fxLayout.xs", "column", "fxLayout.lt-md", "column"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "10px"], ["href", "https://scoperty.de/pages/about", "target", "_blank"], ["href", "https://scoperty.de/", "target", "blank"], ["href", "https://scoperty.de/blog", "target", "blank"], ["href", "https://scoperty.jobs.personio.de/", "target", "blank"], ["href", "https://scoperty.de/pages/verkaufsberatung", "target", "_blank"], ["href", "https://scoperty.de/page/broker", "target", "blank"], ["href", "https://scoperty.de/pages/immobilie-verkaufen", "target", "blank"], ["href", "https://scoperty.de/pages/immobilie-kaufen", "target", "blank"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactsComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsComponent_div_1_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsComponent_div_2_Template, 80, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageName == "reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageName == "reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageName == "contacts");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["div.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  width: 1000px;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\na[_ngcontent-%COMP%]:link {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7QUFBRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBR0E7RUFDRSwwQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDBweDtcclxuICAvLyByaWdodDogMDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIC8vIGhlaWdodDogMTAwcHg7XHJcbiAgLy8gYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmE6bGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.scss'],
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



/**
 *
 *
 * @export
 * @class AppComponent
 */
class AppComponent {
    constructor() {
        this.title = 'collins-web-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "YaHV":
/*!***********************************************!*\
  !*** ./src/app/config/app-settings.config.ts ***!
  \***********************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");



/**
 *
 *
 * @export
 * @class Configuration
 */
class Configuration {
    constructor() {
        // workOrderId = sessionStorage.getItem("id");
        //login
        this.login = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'account/login';
        //common dropdown
        // public getPriority = environment.baseUrl + 'workload/getpriorities';
        this.getPriority = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'common/getpriorities';
        this.getInputFrom = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'common/getinputfrom'; // not working
        // Main expand work load api's for dropdown
        this.getBeingWorkBy = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'common/getworkby'; // not mention that moved to common
        this.getScheduledays = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getscheduledays';
        this.getTeamID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getteamids';
        this.getProductCategory = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'common/getproductcategories';
        this.getProgramModel = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'common/getprogram';
        this.getTask = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/gettasklist';
        this.getStatus = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'common/getstatuses';
        this.getAnsComScore = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getaacs';
        this.getAnsDataScore = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getads';
        // public addMainExpandedForm = environment.baseUrl + 'workload/postworkload/';
        this.addmainexpand = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/postworkload/';
        this.getmainexpand = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getallworkload';
        this.deletemainexpand = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/deleteworkload/';
        this.updatemainexpand = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/putworkload/';
        // lab works
        this.getRequestedBy = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'labrequest/getrequestby';
        this.getEngineer = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'labrequest/getengineers';
        this.getTechnicians = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'labrequest/gettechnicians';
        this.getJobCategoryId = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'labrequest/getrequestjobcategories';
        this.getParts = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'labrequest/getrequestparts';
        this.getAllLabRequest = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'labrequest/getlabrequests';
        this.addLabRequest = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'labrequest/postlabrequest';
        this.updateLabRequest = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'labrequest/putlabrequest/';
        this.deleteLabRequest = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'labrequest/deletelabrequest/';
        //Drawing Review Form
        this.adddrawingreview = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'drawingreview/postdrawingreview/';
        this.getdrawingreview = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'drawingreview/getalldrawingreview';
        this.deletedrawingreview = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'drawingreview/deletedrawingreview/';
        this.updatedrawingreview = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'drawingreview/putdrawingReview/';
        //Failure Form
        this.addfailureanalysis = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'failureanalysis/postfailureanalysis/';
        this.getfailureanalysis = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'failureanalysis/getallfailureanalysis';
        this.deletefailureanalysis = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'failureanalysis/deletefailureanalysis/';
        this.updatefailureanalysis = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'failureanalysis/putfailureanalysis/';
        //Metallic Design Form
        this.addmetallicdesign = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'metallicdesignlimits/postmetallicdesign/';
        this.getmetallicdesign = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'metallicdesignlimits/getallmetallicdesign';
        this.deletemetallicdesign = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'metallicdesignlimits/deletemetallicdesign/';
        this.updatemetallicdesign = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'metallicdesignlimits/putmetallicdesign/';
        //design review Design Form
        this.adddesignreview = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'designreview/postdesignreview/';
        this.getdesignreview = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'designreview/getalldesignreview';
        this.deletedesignreview = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'designreview/deletedesignreview/';
        this.updatedesignreview = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'designreview/putdesignReview/';
        //component specification review Design Form
        this.addcomponentspecific = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'componentspecific/postcomponentspecific/';
        this.getcomponentspecific = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'componentspecific/getallcomponentspecific';
        this.deletecomponentspecific = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'componentspecific/deletecomponentspecific/';
        this.updatecomponentspecific = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'componentspecific/putcomponentspecific/';
        //Supplier request Design Form
        this.addsupplierrequest = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'sri/postsri/';
        this.getsupplierrequest = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'sri/getallsri';
        this.deletesupplierrequest = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'sri/deletesri/';
        this.updatesupplierrequest = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'sri/putsri/';
        // tools specification
        this.addspecification = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/postworkload/';
        this.getspecification = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getallworkload';
        this.deletespecification = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/deleteworkload/';
        this.updatespecification = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/putworkload/';
        // turnbacks
        this.addturnbacks = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/postworkload/';
        this.getturnbacks = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getallworkload';
        this.deleteturnbacks = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/deleteworkload/';
        this.updateturnbacks = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/putworkload/';
        // heatexchange
        this.addheatexchange = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'heatexchanger/postheatexchanger/';
        this.getheatexchange = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'heatexchanger/getallheatexchanger';
        this.deleteheatexchange = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'heatexchanger/deleteheatexchanger/';
        this.updateheatexchange = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'heatexchanger/putheatexchanger/';
        // UTRC
        this.addutrc = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/postworkload/';
        this.getutrc = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getallworkload';
        this.deleteutrc = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/deleteworkload/';
        this.updateutrc = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/putworkload/';
        // memos
        this.addmemos = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/postworkload/';
        this.getmemos = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getallworkload';
        this.deletememos = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/deleteworkload/';
        this.updatememos = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/putworkload/';
        // Lab work request
        this.addlwr = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/postworkload/';
        this.getlwr = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getallworkload';
        this.deletelwr = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/deleteworkload/';
        this.updatelwr = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/putworkload/';
        // Micro request
        this.addmicro = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/postworkload/';
        this.getmicro = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getallworkload';
        this.deletemicro = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/deleteworkload/';
        this.updatemicro = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/putworkload/';
        // POC request
        this.addpoc = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/postworkload/';
        this.getpoc = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/getallworkload';
        this.deletepoc = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/deleteworkload/';
        this.updatepoc = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'workload/putworkload/';
    }
}
Configuration.ɵfac = function Configuration_Factory(t) { return new (t || Configuration)(); };
Configuration.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Configuration, factory: Configuration.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Configuration, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/material-module */ "qAUw");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _config_app_settings_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/app-settings.config */ "YaHV");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/features.module */ "hB0V");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/utility.service */ "A1CT");















// import { PdfViewerModule } from 'ng2-pdf-viewer';
/**
 *
 *
 * @export
 * @class AppModule
 */
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _config_app_settings_config__WEBPACK_IMPORTED_MODULE_10__["Configuration"],
        _services_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _features_features_module__WEBPACK_IMPORTED_MODULE_11__["FeaturesModule"],
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModulesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _features_features_module__WEBPACK_IMPORTED_MODULE_11__["FeaturesModule"],
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModulesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _features_features_module__WEBPACK_IMPORTED_MODULE_11__["FeaturesModule"],
                    src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModulesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                ],
                providers: [
                    _config_app_settings_config__WEBPACK_IMPORTED_MODULE_10__["Configuration"],
                    _services_utility_service__WEBPACK_IMPORTED_MODULE_13__["UtilityService"],
                    primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
                    primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "hB0V":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/material-module */ "qAUw");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features-routing.module */ "0e1J");
/* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features.component */ "mXFZ");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contacts.component */ "SvMc");










/**
 *
 *
 * @export
 * @class FeaturesModule
 */
class FeaturesModule {
}
FeaturesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeaturesModule });
FeaturesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FeaturesModule_Factory(t) { return new (t || FeaturesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _features_routing_module__WEBPACK_IMPORTED_MODULE_6__["FeaturesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModulesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeaturesModule, { declarations: [_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _features_routing_module__WEBPACK_IMPORTED_MODULE_6__["FeaturesRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModulesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeaturesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _features_routing_module__WEBPACK_IMPORTED_MODULE_6__["FeaturesRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModulesModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");



/**
 *
 *
 * @export
 * @class FooterComponent
 * @implements {OnInit}
 */
class FooterComponent {
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
    ngOnInit() {
        this.copyRightVersion = new Date().getUTCFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 1, consts: [["color", "primary"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.copyRightVersion, " Collins Aerospace, a Raytheon Technologies company.");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: ["[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n  height: 40px;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFSUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZm9vdGVyIHtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuLy8gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG46aG9zdCB7XHJcbiAgICAubWF0LXRvb2xiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mXFZ":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






/**
 *
 *
 * @export
 * @class FeaturesComponent
 * @implements {OnInit}
 */
class FeaturesComponent {
    constructor() {
        this.sideBarOpen = true;
        this.isDark = false;
    }
    /**
     *
     *
     * @memberof FeaturesComponent
     */
    ngOnInit() { }
    /**
     *
     *
     * @memberof FeaturesComponent
     */
    sideBarToggle() {
        this.sideBarOpen = !this.sideBarOpen;
    }
    get themeMode() {
        return this.isDark ? 'theme-dark' : 'theme-light';
    }
    /**
     *
     *
     * @param {boolean} isDarkMode
     * @memberof FeaturesComponent
     */
    switchMode(isDarkMode) {
        this.isDark = isDarkMode;
    }
}
FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) { return new (t || FeaturesComponent)(); };
FeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesComponent, selectors: [["app-features"]], hostVars: 2, hostBindings: function FeaturesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.themeMode);
    } }, decls: 6, vars: 1, consts: [[3, "toggleSideBarForMe", "darkModeSwitched"], ["mode", "side", 3, "opened"]], template: function FeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideBarForMe", function FeaturesComponent_Template_app_header_toggleSideBarForMe_0_listener() { return ctx.sideBarToggle(); })("darkModeSwitched", function FeaturesComponent_Template_app_header_darkModeSwitched_0_listener($event) { return ctx.switchMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sideBarOpen);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxubWF0LWRyYXdlciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZHJhd2VyLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-features',
                templateUrl: './features.component.html',
                styleUrls: ['./features.component.scss'],
            }]
    }], null, { themeMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "qAUw":
/*!*******************************************!*\
  !*** ./src/app/shared/material-module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModulesModule", function() { return MaterialModulesModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");



























// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
/**
 *
 *
 * @export
 * @class MaterialModulesModule
 */
class MaterialModulesModule {
}
MaterialModulesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MaterialModulesModule });
MaterialModulesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MaterialModulesModule_Factory(t) { return new (t || MaterialModulesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]
            // MatProgressSpinnerModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]
        // MatProgressSpinnerModule
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MaterialModulesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]
        // MatProgressSpinnerModule
    ], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]
        // MatProgressSpinnerModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MaterialModulesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]
                    // MatProgressSpinnerModule
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]
                    // MatProgressSpinnerModule
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "sRhs":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







/**
 *
 *
 * @export
 * @class SidebarComponent
 * @implements {OnInit}
 */
class SidebarComponent {
    /**
     * Creates an instance of SidebarComponent.
     * @memberof SidebarComponent
     */
    constructor(utilityService) {
        this.utilityService = utilityService;
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
    ngOnInit() { }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 26, vars: 0, consts: [[1, "profile-card"], [1, "header"], ["alt", "Collins Logo", "src", "/assets/img/scoperty.jpg", 2, "width", "120px", "height", "50px", "object-fit", "scale-down"], ["alt", "profile img", "src", "/assets/img/House.jpg"], ["matSubheader", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/home/dashboard"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/home/switchboard"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/home/reviews"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/home/contacts"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "kontakt@scoperty.de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Switch Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " rate_review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Review ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " import_contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["[_nghost-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n[_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtY2FyZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");





const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    {
        path: '*',
        redirectTo: 'home/switchboard',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/features/features.module */ "hB0V")).then(m => m.FeaturesModule)
    }
];
/**
 *
 *
 * @export
 * @class AppRoutingModule
 */
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utility.service */ "A1CT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function LoginComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be of length 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
/**
 *
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
class LoginComponent {
    /**
     * Creates an instance of LoginComponent.
     * @param {Router} router
     * @memberof LoginComponent
     */
    constructor(router, utilityService) {
        this.router = router;
        this.utilityService = utilityService;
        this.title = 'Login';
    }
    /**
     *
     *
     * @memberof LoginComponent
     */
    ngOnInit() { }
    /**
     *
     *
     * @param {NgForm} f
     * @memberof LoginComponent
     */
    signIn(f) {
        // console.log('this.formGroup.value', f.value);
        // this.displaySpinner = true;
        // this.utilityService.addRequest(f.value, 'login').subscribe(
        //   (res) => {
        //     this.utilityService.sendDataViaService(res);
        //     // this.displaySpinner = false;
        //     //  this.reviewer = res.body['Data'];
        //     sessionStorage.setItem('userName', f.value.EmployeeId);
        //     this.router.navigate(['/home']);
        //   },
        //   (error) => {
        //     // this.displaySpinner = false;
        //     //  this.error = error;
        //     this.error = 'Invalid User Name/Password';
        //   }
        // );
        if (f.value.EmployeeId === 'admin' && f.value.password === 'admin') {
            sessionStorage.setItem('userName', f.value.username);
            this.router.navigate(['/home']);
        }
    }
    /**
     *
     *
     * @param {NgForm} f
     * @memberof LoginComponent
     */
    signUp(f) {
        // console.log('inside', f.value);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 33, vars: 4, consts: [[1, "login-page"], ["alt", "Collins Logo", "src", "/assets/img/scoperty.jpg", 2, "width", "200px", "height", "27px", "object-fit", "scale-down"], [2, "color", "#3dc988", "text-shadow", "2px 2px 4px #000000"], [1, "mat-elevation-z12"], ["mat-stretch-tabs", "", 1, "example-stretched-tabs"], ["label", "Sign In"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["matInput", "", "placeholder", "User Name", "required", "", "name", "EmployeeId", "ngModel", ""], ["EmployeeId", "ngModel"], ["name", "perm_identity", "matSuffix", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Password", "type", "password", "required", "", "minlength", "5", "maxlength", "20", "name", "password", "ngModel", ""], ["password", "ngModel"], ["name", "lock", "matSuffix", ""], ["mat-raised-button", "", "name", "btnlogin", 1, "login-button"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The Pre-Market for Real Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Estimates for over 35 million properties freely available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.signIn(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "perm_identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_mat_error_21_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_mat_error_25_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_mat_error_26_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && _r3.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error, "");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.login-page[_ngcontent-%COMP%] {\n  top: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-image: url(\"/assets/img/login-image1.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n}\n\n.login-page[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.login-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin: 18px auto;\n  position: absolute;\n  top: 0px;\n  left: 70px;\n  font-size: 23px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 6% auto;\n  border-radius: 8px;\n  background: linear-gradient(to bottom right, #cbe9db, #cbe9db);\n}\n\nmat-form-field[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%] {\n  width: 80%;\n  display: block;\n  margin: auto;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n  width: 80%;\n  margin: 20px auto;\n  background: linear-gradient(to right, #3dc988, #3dc988);\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px 0px 0px 40px;\n  font-size: small;\n}\n\nh4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxxREFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBS1E7RUFDSSxpQkFBQTtBQUZaOztBQUtJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFIUjs7QUFNQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtBQUhKOztBQUtBOztFQUVJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVEQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBOztFQUVJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQpLCByZ2JhKDAsIDAsIDAsIDAuNCkpLCB1cmwoXCIvYXNzZXRzL2ltZy9sb2dpbi1pbWFnZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKFwiL2Fzc2V0cy9pbWcvbG9naW4taW1hZ2UxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDE4cHggYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbGVmdDogNzBweDtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbn1cclxubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogNiUgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNjYmU5ZGIsICNjYmU5ZGIpO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLFxyXG5tYXQtY2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZGM5ODgsICAgIzNkYzk4OCk7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuaDQsXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4vLyAubG9naW5Gb3JtIHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLCAwLCAwLCAwLjQpKSwgdXJsKFwiL2Fzc2V0cy9pbWcvbG9naW4taW1hZ2UuanBnXCIpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB9XHJcbi8vIC5mb3JtLWJveCB7XHJcbi8vICAgICB3aWR0aDogMzgwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDQ2MHB4O1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgbWFyZ2luOiA2JSBhdXRvO1xyXG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYmViZWJlLCBncmF5KTtcclxuLy8gICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgIC8vICAgICB0byBib3R0b20sXHJcbi8vICAgICAvLyAgICAgcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjMpIDEwMCUsXHJcbi8vICAgICAvLyAgICAgcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjEpIDE1JSxcclxuLy8gICAgIC8vICAgICB0cmFuc3BhcmVudCA1MCUsXHJcbi8vICAgICAvLyAgICAgdHJhbnNwYXJlbnQgODUlLFxyXG4vLyAgICAgLy8gICAgIHJnYmEoMjI1LCAyMjUsIDIyNSwgMC4zKSAxMDAlXHJcbi8vICAgICAvLyApO1xyXG5cclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIC8vIG1hcmdpbi1yaWdodDogOCU7XHJcbi8vIH1cclxuLy8gLmJ1dHRvbi1ib3gge1xyXG4vLyAgICAgd2lkdGg6IDMwMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAzNXB4IGF1dG87XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjZmY2MTI0MWY7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4vLyB9XHJcbi8vIC50b2dnbGUtYnRuIHtcclxuLy8gICAgIHdpZHRoOiAxNDBweDtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm9yZGVyOiAwO1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG4vLyAuYnRuIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JheSwgYmxhY2spO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuLy8gICAgIHRyYW5zaXRpb246IDAuOHM7XHJcbi8vIH1cclxuLy8gLnNvY2lhbC1pY29ucyB7XHJcbi8vICAgICBtYXJnaW46IDE4cHggYXV0bztcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMHB4O1xyXG4vLyAgICAgcmlnaHQ6IDhweDtcclxuLy8gfVxyXG5cclxuLy8gLnNvY2lhbC1pY29ucyBpbWcge1xyXG4vLyAgICAgd2lkdGg6IDIycHg7XHJcbi8vICAgICBtYXJnaW46IDAgOHB4O1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAwIDEycHggMCAjN2Y3ZjdmM2Q7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICAvLyBib3JkZXItcmFkaXVzOiA0MCU7XHJcbi8vIH1cclxuLy8gLmlucHV0LWdyb3VwIHtcclxuLy8gICAgIHRvcDogMTgwcHg7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB3aWR0aDogMjgwcHg7XHJcbi8vICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4vLyB9XHJcbi8vIC5pbnB1dC1maWVsZCB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHggMDtcclxuLy8gICAgIG1hcmdpbjogNXB4IDA7XHJcbi8vICAgICBib3JkZXItbGVmdDogMDtcclxuLy8gICAgIGJvcmRlci10b3A6IDA7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcbi8vIC5zdWJtaXQtYnRuIHtcclxuLy8gICAgIHdpZHRoOiA4NSU7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JheSwgYmxhY2spO1xyXG4vLyAgICAgYm9yZGVyOiAwO1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbi8vIH1cclxuLy8gLmNoZWNrLWJveCB7XHJcbi8vICAgICBtYXJnaW46IDRweCAxMHB4IDMwcHggMDtcclxuLy8gfVxyXG4vLyAuc3BhbiB7XHJcbi8vICAgICBjb2xvcjogIzc3NztcclxuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcclxuLy8gICAgIGJvdHRvbTogNjhweDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gfVxyXG5cclxuLy8gI2xvZ2luIHtcclxuLy8gICAgIGxlZnQ6IDUwcHg7XHJcbi8vIH1cclxuXHJcbi8vICNyZWdpc3RlciB7XHJcbi8vICAgICBsZWZ0OiA1MHB4O1xyXG4vLyB9XHJcblxyXG4vLyAubG9naW4taGVhZGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4vLyB9XHJcbi8vIC5mb3Jnb3QtcGFzc3dvcmQge1xyXG4vLyAgICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA0MHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuLy8gfVxyXG4vLyAubG9naW4tdGV4dCB7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBtYXJnaW46IDE4cHggYXV0bztcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMHB4O1xyXG4vLyAgICAgbGVmdDogNjJweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjNweDtcclxuLy8gfVxyXG4vLyAubW92aW5nLWZsaWdodHMgaW1nIHtcclxuLy8gICAgIHdpZHRoOiA1MHB4O1xyXG4vLyAgICAgYW5pbWF0aW9uOiBtb3ZpbmctZmxpZ2h0cyA3cyBsaW5lYXIgaW5maW5pdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5tb3ZpbmctZmxpZ2h0cyB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vIH1cclxuLy9iZWxvdyBjb2RlIGZvciBzbWFsbCBmbGlnaHQgYW5pbWF0aW9uXHJcbi8vIEBrZXlmcmFtZXMgbW92aW5nLWZsaWdodHN7XHJcbi8vICAgICAwJXtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgIH1cclxuLy8gICAgIDUwJXtcclxuLy8gICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgNzAle1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICB9XHJcbi8vICAgICAxMDAle1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODB2aCk7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLm1vdmluZy1mbGlnaHRzIGltZzpudGgtY2hpbGQoMSl7XHJcbi8vICAgICBhbmltYXRpb24tZGVsYXkgOjJzO1xyXG4vLyAgICAgd2lkdGg6IDIwcHg7XHJcbi8vIH1cclxuLy8gLm1vdmluZy1mbGlnaHRzIGltZzpudGgtY2hpbGQoMil7XHJcbi8vICAgICBhbmltYXRpb24tZGVsYXkgOjFzO1xyXG4vLyAgICAgd2lkdGg6IDEwcHg7XHJcbi8vIH1cclxuLy8gLm1vdmluZy1mbGlnaHRzIGltZzpudGgtY2hpbGQoMyl7XHJcbi8vICAgICBhbmltYXRpb24tZGVsYXkgOjIuNXM7XHJcbi8vICAgICB3aWR0aDogNTBweDtcclxuLy8gfVxyXG4vLyAubW92aW5nLWZsaWdodHMgaW1nOm50aC1jaGlsZCg0KXtcclxuLy8gICAgIGFuaW1hdGlvbi1kZWxheSA6NHM7XHJcbi8vICAgICB3aWR0aDogMzVweDtcclxuLy8gfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map