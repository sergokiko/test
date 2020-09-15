import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostsModel} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class SinglePostService {

  constructor(private  http: HttpClient) { }
  // @ts-ignore
  getSinglePost(id = 1): Observable<PostsModel>{
    return this.http.get<PostsModel>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
