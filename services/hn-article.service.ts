import { Injectable } from '@angular/core';
import { HnArticle } from '../models/hnArticle.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HnArticleService {
  hnArticlesChanged = new Subject<HnArticle[]>();
  private hnArticles: HnArticle[] = [
    new HnArticle(
      "My Awesome Article",
      "This Awesome article is tell you about all the awesome things that are Awesome",
      `In The year 1900 the awesome bird did awesome things that were awesome and ye
      I used backtics cause es6 whoop whoop FREEDOM even though its ecma 2017 and soon to be
      2018 like WAAAA :O
      `,
      "http://www.trendbuzzy.com/wp-content/uploads/2017/05/1496272572_hqdefault.jpg",
      1
    ),

    new HnArticle(
      "My Awesome Article 2",
      "This Awesome article is tell you about all the awesome things that are Awesome",
      `Did you know that Angular 4 is now just called Angular cause 3 is bad luck in china
      weird right anyway its kinda cool I guess O also old angular is just called angualr.js now
      and 2 is still 2 but really it was just deperacted.
      `,
      "http://www.angularconnect.com/workspace/2015/img/resources/angular.png",
      5
    )
  ]
  sethnArticles(hnArticles: HnArticle[]){
    this.hnArticles = hnArticles;
    this.updateSubject();
  }

  gethnArticles(){
    return this.hnArticles.slice() //remeber slice gives a copy
  }

  getHnArticle(index: number){
    return this.hnArticles[index];
  }

  addHnArticle(hnArticle: HnArticle){
    this.hnArticles.push(hnArticle);
    this.updateSubject()
  }

  updatehnArticles(index: number, newHnArticle: HnArticle){
    this.hnArticles[index] = newHnArticle;
    this.updateSubject();
  }

  deleteHnArticle(index: number){
    this.hnArticles.splice(index, 1);
    this.updateSubject();
  }

  updateSubject(){
    this.hnArticlesChanged.next(this.hnArticles.slice());
  }

  addLike(index:number){
    this.hnArticles[index].likes  += 1;
    this.updateSubject();
  }

  addDisLike(index:number){
      this.hnArticles[index].likes  += -1;
      let i = 0;
        if(this.hnArticles[index].likes < -10 ){
          this.deleteHnArticle(index);
        }
      this.updateSubject();
  }
  constructor() { }

}
