import { Component, OnInit, DoCheck }      from '@angular/core';
import { Http }                            from '@angular/http';
import { PostService }                     from './posts.service';
import { Post }                            from './post';


@Component({
  selector: 'posts',
  template: `
    <h1>Posts</h1>
    <button (click)="clickMe()">Click</button>
    <div *ngIf="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>
    </div>
    <div *ngFor="let post of posts">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
      <hr />
    </div>
  `
})
export class PostsComponents implements OnInit, DoCheck {
  posts: Post[];
  isLoading = true;

  constructor(private _postService: PostService){
  }

  ngOnInit(){
    this._postService.getPosts().subscribe(posts => {
      this.isLoading = false;
      this.posts = posts;
    });
  }

  ngDoCheck(){
    console.log('DoCheck has run....');
  }

  clickMe(){
    console.log('clicked');
  }
}
