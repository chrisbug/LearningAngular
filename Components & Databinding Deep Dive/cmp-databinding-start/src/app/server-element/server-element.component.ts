import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //set the view caspulation rember none makes the css views global
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement')element :{type: string, name: string, content: string};
  @Input() name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnCHanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called !');
  }

  ngDoCheck(){
    console.log('Do check called!')
  }

  ngAfterContentInit(){
    console.log('After content init');
  }

}
