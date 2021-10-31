import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'switchboard',
        loadChildren: () =>
          import('../features/switch-board/switch-board.module').then(
            (m) => m.SwitchBoardModule
          ),
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'reviews',
        component: ContactsComponent,
      },
    ],
  },
];

/**
 *
 *
 * @export
 * @class FeaturesRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
