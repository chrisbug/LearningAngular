import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponents } from './posts.component';
import {PostService}    from './posts.service';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponents

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
