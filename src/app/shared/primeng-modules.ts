import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';

/**
 *
 *
 * @export
 * @class PrimengModulesModule
 */
@NgModule({
  declarations: [],
  imports: [
    CalendarModule,
    TableModule,
    CardModule,
    DropdownModule,
    DialogModule,
    TabViewModule,
    ToggleButtonModule,
    MultiSelectModule,
    CheckboxModule,
    DataViewModule,
    PanelModule,
    RadioButtonModule,
    AutoCompleteModule,
    FileUploadModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  exports: [
    CalendarModule,
    TableModule,
    CardModule,
    DropdownModule,
    DialogModule,
    TabViewModule,
    ToggleButtonModule,
    MultiSelectModule,
    CheckboxModule,
    DataViewModule,
    PanelModule,
    RadioButtonModule,
    AutoCompleteModule,
    FileUploadModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
  ],
})
export class PrimengModulesModule {}
