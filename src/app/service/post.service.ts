import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {PostsModel} from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {

  }
  getPosts(): Observable<PostsModel[]>{
    return this.http.get<PostsModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsById(id: string): Observable<PostsModel[]>{
    return this.http.get<PostsModel[]>('https://jsonplaceholder.typicode.com/posts?userId=' + id);
  }

}
