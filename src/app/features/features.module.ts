import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModulesModule } from 'src/app/shared/material-module';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { ContactsComponent } from './contacts/contacts.component';

/**
 *
 *
 * @export
 * @class FeaturesModule
 */
@NgModule({
  declarations: [FeaturesComponent, ContactsComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModulesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class FeaturesModule { }
