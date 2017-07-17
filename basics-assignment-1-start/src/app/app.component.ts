import { Component, OnInit } from '@angular/core';

import { WarningAlrtComponent } from './warning-alrt/warning-alrt.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  warningAlert: boolean =  false;

  constructor(){
    this.warningAlert =  Math.random() > 0.5 ? true: false;
    console.log(this.warningAlert);
  }

  ngOnInit() {
  }
}
