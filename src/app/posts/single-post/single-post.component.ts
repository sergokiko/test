import { Component, OnInit } from '@angular/core';
import {PostsModel} from '../../models/post.model';
import {SinglePostService} from '../../service/single-post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post: PostsModel;
  constructor(private singlePostService: SinglePostService) {
    this.singlePostService.getSinglePost().subscribe(singlePost => {
      this.post = singlePost;
    });
  }

  ngOnInit(): void {
  }
  showSinglePost(id): void {
    this.singlePostService.getSinglePost(id).subscribe(post => {
      this.post = post;
    });
  }

}
