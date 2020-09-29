import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsModel} from '../../../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
post;
  constructor(private router: Router, private  activatedRoute: ActivatedRoute) {
this.activatedRoute.params.subscribe(value => {
  this.post = this.router.getCurrentNavigation().extras.state;
});
  }

  ngOnInit(): void {
  }

}
