import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Post }       from './post';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  private postsUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private _http:Http){}

  getPosts(): Observable<Post[]>{
    return this._http.get(this.postsUrl).map(res => res.json());
  }
}
