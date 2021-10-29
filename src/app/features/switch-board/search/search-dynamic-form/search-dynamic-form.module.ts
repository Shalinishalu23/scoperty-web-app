import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDynamicFormRoutingModule } from './search-dynamic-form-routing.module';


/**
 *
 *
 * @export
 * @class SearchDynamicFormModule
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchDynamicFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SearchDynamicFormModule { }
