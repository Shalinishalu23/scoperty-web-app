import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        redirectTo: 'switchboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'switchboard',
        loadChildren: () => import('../features/switch-board/switch-board.module').then(m => m.SwitchBoardModule)
      },
      {
        path: 'labs',
        loadChildren: () => import('../features/labs/labs.module').then(m => m.LabsModule)
      }
    ]
  }
];

/**
 *
 *
 * @export
 * @class FeaturesRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
