import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialModulesModule } from 'src/app/shared/material-module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

/**
 *
 *
 * @export
 * @class DashboardModule
 */
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModulesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class DashboardModule { }
