import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //set the view caspulation rember none makes the css views global
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild{
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

  ngAfterContentChecked(){
    console.log('AfterContentChecked called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(){
    console.log('AfterViewInit called');
  }

  ngOnDestroy(){
    console.log('OnDestroy called');
  }

}
