import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import {AppRoutingModule} from './app-routing.module';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostsCommentsComponent } from './posts-comments/posts-comments.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    CommentsComponent,
    SinglePostComponent,
    UserPostsComponent,
    MainPageComponent,
    PostsCommentsComponent,
    UserInfoComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
