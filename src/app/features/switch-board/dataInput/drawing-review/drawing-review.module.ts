import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingReviewRoutingModule } from './drawing-review-routing.module';
import { MaterialModulesModule } from 'src/app/shared/material-module';
import { PrimengModulesModule } from 'src/app/shared/primeng-modules';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DrawingReviewRoutingModule,
    MaterialModulesModule,
    PrimengModulesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DrawingReviewModule { }
