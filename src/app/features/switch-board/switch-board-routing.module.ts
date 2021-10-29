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
