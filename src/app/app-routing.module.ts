import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: 'home/switchboard',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/features/features.module').then(m => m.FeaturesModule)
  }
];

/**
 *
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
