import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchDynamicFormComponent } from './search-dynamic-form.component';

const routes: Routes = [
  {
    path: '',
    component: SearchDynamicFormComponent,
  },
];

/**
 *
 *
 * @export
 * @class SearchDynamicFormRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDynamicFormRoutingModule { }
