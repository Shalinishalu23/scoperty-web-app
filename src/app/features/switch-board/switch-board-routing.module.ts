import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInputComponent } from './data-input/data-input.component';
import { ReportDynamicFormComponent } from './reports/report-dynamic-form/report-dynamic-form.component';
import { SearchDynamicFormComponent } from './search/search-dynamic-form/search-dynamic-form.component';
import { SwitchBoardComponent } from './switch-board.component';
import { ToolboxDynamicFormComponent } from './tool-box/toolbox-dynamic-form/toolbox-dynamic-form.component';

const routes: Routes = [
  {
    path: '',
    component: SwitchBoardComponent,
  },
  // {
  //   path: 'mainexpand',
  //   component: DataInputComponent,
  //   // component: DatainputDynamicFormComponent,
  //   // children: [
  //   //   {
  //   //     path: 'mainexpand',
  //   //     component: DatainputDynamicFormComponent
  //   //   }
  //   // ]
  // },
  // {
  //   path: 'drawingreview',
  //   component: DataInputComponent,
  // },
  // {
  //   path: 'designreview',
  //   component: DataInputComponent,
  // },
  // {
  //   path: 'failureanalysis',
  //   component: DataInputComponent,
  // },
  // {
  //   path: 'heatexchange',
  //   component: DataInputComponent,
  // },
  // {
  //   path: 'componentspecific',
  //   component: DataInputComponent,
  // },
  // {
  //   path: 'metallicdesign',
  //   component: DataInputComponent,
  // },
  // {
  //   path: 'supplierrequest',
  //   component: DataInputComponent,
  // },
  // {
  //   path: 'specification',
  //   component: DataInputComponent,
  // },
  // {
  //   path: 'turnbacks',
  //   component: ToolboxDynamicFormComponent,
  // },
  // {
  //   path: 'memos',
  //   component: ToolboxDynamicFormComponent,
  // },
  // {
  //   path: 'lwr',
  //   component: ToolboxDynamicFormComponent,
  // },
  // {
  //   path: 'micro',
  //   component: ToolboxDynamicFormComponent,
  // },
  // {
  //   path: 'utrc',
  //   component: ToolboxDynamicFormComponent,
  // },
  // {
  //   path: 'poc',
  //   component: ToolboxDynamicFormComponent,
  // },
  // {
  //   path: 'hardware',
  //   component: ToolboxDynamicFormComponent,
  // },
  // {
  //   path: 'hser',
  //   component: ToolboxDynamicFormComponent,
  // },
  // {
  //   path: 'searchDrawingReview',
  //   component: SearchDynamicFormComponent,
  // },
  // {
  //   path: 'searchMemo',
  //   component: SearchDynamicFormComponent,
  // },
  // {
  //   path: 'searchTurnBack',
  //   component: SearchDynamicFormComponent,
  // },
  // {
  //   path: 'pst',
  //   component: ReportDynamicFormComponent,
  // },
  // {
  //   path: 'qcpc',
  //   component: ReportDynamicFormComponent,
  // },
  // {
  //   path: 'keyprocess',
  //   component: ReportDynamicFormComponent,
  // },
  // {
  //   path: 'myjobs',
  //   component: ReportDynamicFormComponent,
  // },
  // {
  //   path: 'alljobs',
  //   component: ReportDynamicFormComponent,
  // },
  // {
  //   path: 'montlydr',
  //   component: ReportDynamicFormComponent,
  // },
  // {
  //   path: 'psr',
  //   component: ReportDynamicFormComponent,
  // },
];

/**
 *
 *
 * @export
 * @class SwitchBoardRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchBoardRoutingModule {}
