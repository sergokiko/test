import { Component, OnInit } from '@angular/core';
import {CommentModel} from '../models/comment.model';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {CommentsService} from '../service/comments.service';

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.css']
})
export class PostsCommentsComponent implements OnInit {
  comments: CommentModel[] = [];
  constructor(private route: ActivatedRoute, private commentService: CommentsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const {id} = params;

      this.commentService.getCommentsByPostId(id).subscribe(comments => {
        this.comments = comments;
      });
    });
  }

}
