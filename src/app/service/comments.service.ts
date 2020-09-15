import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentModel} from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getTodos(): Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
