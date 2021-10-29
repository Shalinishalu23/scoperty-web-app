import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetallicDesignComponent } from './metallic-design.component';

const routes: Routes = [
  {
    path:'',
    component:MetallicDesignComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetallicDesignRoutingModule { }
