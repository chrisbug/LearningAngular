import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{title | uppercase}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>Today is {{today | date:'longDate'}} and it is {{today | date:'shortTime'}}</h2>
    <h2>{{name}}s  birthday is {{ birthday | date:'longDate'}}</h2>
    <h2>{{number | currency:'USD':'true'}}</h2>
    <h2>{{promise | async}}</h2>
  `
})
export class AppComponent {
  title;
  name;
  newname;
  today;
  birthday;
  number;
  promise;
  constructor(){
    this.name = 'DAVE';
    this.newname = 'DAVE Doe';
    this.title = 'app works!';
    this.today = new Date();
    this.birthday =  new Date('1993-08-22');
    this.number = 5;
    this.promise = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('Hey , I am a promise');
      }, 3000);
    });
  }
}
