import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  template: `
    <h1>title</h1>
    <my-heroes></my-heroes>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
