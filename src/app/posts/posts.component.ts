import {Component, OnInit} from '@angular/core';


import {PostService} from '../service/post.service';
import {PostsModel} from '../models/post.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Array<PostsModel> = [] ;


  constructor(private dataService: PostService, private router: Router,private activatedRoute: ActivatedRoute) {

    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

async showComments(id: number): Promise<void> {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
     .then(response => response.json())
     .then(json => console.log(json));
  }

  goToDetails(post: PostsModel): void {
    this.router.navigate(['detail', post.id], {
      relativeTo: this.activatedRoute,
      state: post
    });
  }
}
