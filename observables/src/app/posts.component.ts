import { Component }      from '@angular/core';
import { Http }           from '@angular/http';
import { PostService }    from './posts.service';


@Component({
  selector: 'posts',
  template: `
    <h1>Posts</h1>
  `
})
export class PostsComponents{
  constructor(private _postService: PostService){
    this._postService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }
}
