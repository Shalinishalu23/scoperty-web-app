import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainExpandRoutingModule } from './main-expand-routing.module';
import { MaterialModulesModule } from 'src/app/shared/material-module';
import { PrimengModulesModule } from 'src/app/shared/primeng-modules';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainExpandRoutingModule,
    MaterialModulesModule,
    PrimengModulesModule,
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainExpandModule { }
