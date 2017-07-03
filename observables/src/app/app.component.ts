import { Component } from '@angular/core';
import { Http }       from '@angular/http';

import { PostService } from './posts.service';
import { PostsComponents } from './posts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
