import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModulesModule } from 'src/app/shared/material-module';
import { PrimengModulesModule } from 'src/app/shared/primeng-modules';
import { FooterBoxComponent } from './footer-box/footer-box.component';
import { SearchDynamicFormComponent } from './search/search-dynamic-form/search-dynamic-form.component';
import { SwitchBoardRoutingModule } from './switch-board-routing.module';
import { SwitchBoardComponent } from './switch-board.component';
import { ToolBoxComponent } from './tool-box/tool-box.component';
import { SearchDynamicTableComponent } from './search/search-dynamic-table/search-dynamic-table.component';
import { ToolboxDynamicFormComponent } from './tool-box/toolbox-dynamic-form/toolbox-dynamic-form.component';
import { ReportDynamicFormComponent } from './reports/report-dynamic-form/report-dynamic-form.component';
import { from } from 'rxjs';
import { DataInputComponent } from './data-input/data-input.component';
import { DatainputDynamicTableComponent } from './data-input/datainput-dynamic-table/datainput-dynamic-table.component';
import { UserCommentTableComponent } from './data-input/user-comment-table/user-comment-table.component';
import { DatainputDynamicFormComponent } from './data-input/datainput-dynamic-form/datainput-dynamic-form.component';

/**
 *
 *
 * @export
 * @class SwitchBoardModule
 */
@NgModule({
  declarations: [
    SwitchBoardComponent,
    ToolBoxComponent,
    DatainputDynamicTableComponent,
    SearchDynamicFormComponent,
    UserCommentTableComponent,
    FooterBoxComponent,
    SearchDynamicTableComponent,
    DatainputDynamicFormComponent,
    ToolboxDynamicFormComponent,
    ReportDynamicFormComponent,
    DataInputComponent,
  ],

  imports: [
    CommonModule,
    SwitchBoardRoutingModule,
    MaterialModulesModule,
    PrimengModulesModule,
    FormsModule,
    ReactiveFormsModule,
    // ConfirmDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwitchBoardModule {}
