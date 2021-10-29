import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { MaterialModulesModule } from 'src/app/shared/material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Configuration } from './config/app-settings.config';
import { FeaturesModule } from './features/features.module';
import { LoginComponent } from './login/login.component';
import { UtilityService } from './services/utility.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
/**
 *
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeaturesModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    PdfViewerModule
  ],
  providers: [
    Configuration,
    UtilityService,
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
