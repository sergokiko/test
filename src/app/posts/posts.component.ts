import {Component, OnInit} from '@angular/core';


import {PostService} from '../service/post.service';
import {PostsModel} from '../models/post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Array<PostsModel> = [] ;

  constructor(private dataService: PostService ) {

    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

}
