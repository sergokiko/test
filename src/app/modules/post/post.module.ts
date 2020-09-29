import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostService} from '../../service/post.service';
import {CommentsService} from '../../service/comments.service';
import {PostsComponent} from './components/posts/posts.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {PostsCommentsComponent} from './components/posts-comments/posts-comments.component';
import {RouterModule} from '@angular/router';
import {SinglePostComponent} from './components/posts/single-post/single-post.component';
import {SinglePostService} from '../../service/single-post.service';



@NgModule({
  declarations: [PostsComponent, PostDetailComponent, PostsCommentsComponent, SinglePostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '' , component: PostsComponent, children: [
  {path: 'comments/:id' , component: PostsCommentsComponent},
  {path: 'detail/:id' , component: PostDetailComponent}
        ] }
    ])
  ],
  providers: [
    PostService,
    CommentsService,
    SinglePostService
  ]
})
export class PostModule { }
