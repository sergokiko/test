import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../service/post.service';
import {PostsModel} from '../models/post.model';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts: PostsModel[];

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const {id} = params;

      this.postService.getPostsById(id).subscribe(posts => {
        this.posts = posts;
      });
    });
  }

}
