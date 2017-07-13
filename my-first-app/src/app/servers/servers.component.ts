import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName: string = '';
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'NO server was created';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 6000);
  }

  ngOnInit() {
    console.log('page loaded');
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
