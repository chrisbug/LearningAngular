import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName: string = 'Test server';
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'NO server was created';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
    console.log('page loaded');
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
