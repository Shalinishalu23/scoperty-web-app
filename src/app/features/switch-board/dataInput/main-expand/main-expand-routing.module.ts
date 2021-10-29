import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainExpandComponent } from './main-expand.component';

const routes: Routes = [
  {
    path:'',
    component:MainExpandComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainExpandRoutingModule { }
