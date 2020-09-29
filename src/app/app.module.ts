import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {AppRoutingModule} from './app-routing.module';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {PostModule} from './modules/post/post.module';
import {CommentsModule} from './modules/comments/comments.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserPostsComponent,
    MainPageComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PostModule,
    CommentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
