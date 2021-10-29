import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabsComponent } from './labs.component';

const routes: Routes = [
  {
    path:'',
    component:LabsComponent
  }
];

/**
 *
 *
 * @export
 * @class LabsRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LabsRoutingModule { }
