import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//this is basic and best one to use
  //selector alternatives can use ['app-root'] to select by atributes e.g <div app-root></div>
  // can also select by class e.g .app-root
  // but can't use id and sudo selectors e.g click
  templateUrl: './app.component.html',
  //can use template: to write html in file
  styleUrls: ['./app.component.css']
  //styles: [`
  //  h3{
  //     color: red;
  //   }
  //  `]
})
export class AppComponent {
  title = 'app works!';
}
