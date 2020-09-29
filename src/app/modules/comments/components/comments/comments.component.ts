import { Component, OnInit } from '@angular/core';
import {CommentModel} from '../../../../models/comment.model';
import {CommentsService} from '../../../../service/comments.service';

@Component({
  selector: 'app-todo',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentsList: CommentModel[] = [];

  constructor(private commentService: CommentsService) {
    this.commentService.getComments().subscribe(comments => {
      this.commentsList = comments;
    });
  }
  ngOnInit(): void {
  }

}
