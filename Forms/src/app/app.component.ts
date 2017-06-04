import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .ng-valid[required]{
      border: 1px solid #42A948;
    }

    .ng-invalid[required] {
      border: 1px solid #a94442;
    }

    .outer-container {
      padding: 10px;
    }
  `]
})
export class AppComponent {
  title;
  categories = ['Tech','Business','Entertainment'];
  body;
  author;

  model = new Post(1, 'MR MRs', this.categories[0], 'Hi Im body', 'Chris Buggy');

  newPost() {
    this.model = new Post(2,'','','','');
  }
  submitted = false;

  onSubmit(){ this.submitted = true;}
}
