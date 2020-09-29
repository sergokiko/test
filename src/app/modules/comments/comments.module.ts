import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentsService} from '../../service/comments.service';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CommentsComponent
    }
    ])
  ],
  providers: [
    CommentsService
  ]
})
export class CommentsModule { }
