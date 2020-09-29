import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserPostsComponent} from './user-posts/user-posts.component';
import {MainPageComponent} from './main-page/main-page.component';
import {UserInfoComponent} from './user-info/user-info.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
      {path: 'users', component: UsersComponent , children: [
          {path: 'posts/:id', component: UserPostsComponent},
          {path: 'info/:id', component: UserInfoComponent}
        ]},
      {path: 'posts',  loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(m => m.CommentsModule) },
      {path: 'forms', loadChildren: () => import('./modules/forms/form.module').then(m => m.FormModule) }
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
