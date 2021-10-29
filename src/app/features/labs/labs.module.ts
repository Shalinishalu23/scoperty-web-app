import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MaterialModulesModule } from 'src/app/shared/material-module';
import { PrimengModulesModule } from 'src/app/shared/primeng-modules';
import { AddLabworkComponent } from './add-labwork/add-labwork.component';
import { LabResultsComponent } from './lab-results/lab-results.component';
import { LabsRoutingModule } from './labs-routing.module';
import { LabsComponent } from './labs.component';
import { ViewLabworkComponent } from './view-labwork/view-labwork.component';

/**
 *
 *
 * @export
 * @class LabsModule
 */
@NgModule({
  declarations: [
    LabsComponent,
    AddLabworkComponent,
    ViewLabworkComponent,
    LabResultsComponent,
  ],
  imports: [
    CommonModule,
    LabsRoutingModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModulesModule,
    ConfirmDialogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class LabsModule {}
