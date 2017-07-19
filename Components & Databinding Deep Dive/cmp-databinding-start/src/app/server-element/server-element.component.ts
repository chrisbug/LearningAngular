import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //set the view caspulation rember none makes the css views global
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement')
  element :{type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {

  }

}
