import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlrtComponent } from './warning-alrt/warning-alrt.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlretComponent } from './warning-alret/warning-alret.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlrtComponent,
    SuccessAlertComponent,
    WarningAlretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
