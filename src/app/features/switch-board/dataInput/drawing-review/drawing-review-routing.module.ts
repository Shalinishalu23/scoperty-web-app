import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawingReviewComponent } from './drawing-review.component';

const routes: Routes = [
  {
    path:'',
    component:DrawingReviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawingReviewRoutingModule { }
