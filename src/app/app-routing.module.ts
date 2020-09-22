import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {CommentsComponent} from './comments/comments.component';
import {UserPostsComponent} from './user-posts/user-posts.component';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PostsCommentsComponent} from './posts-comments/posts-comments.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {PostDetailComponent} from './post-detail/post-detail.component';


const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
      {path: 'users', component: UsersComponent , children: [
          {path: 'posts/:id', component: UserPostsComponent},
          {path: 'info/:id', component: UserInfoComponent}
        ]},
      {path: 'posts', component: PostsComponent, children: [
          {path: 'comments/:id' , component: PostsCommentsComponent},
          {path: 'detail/:id' , component: PostDetailComponent}
        ]},
      {path: 'comments', component: CommentsComponent },
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
