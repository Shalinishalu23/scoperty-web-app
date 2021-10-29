import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MaterialModulesModule } from 'src/app/shared/material-module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';

/**
 *
 *
 * @export
 * @class SharedModule
 */
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModulesModule,
    ConfirmDialogModule,
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
