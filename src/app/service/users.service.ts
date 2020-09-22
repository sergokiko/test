import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore

import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`https://jsonplaceholder.typicode.com/users`);
  }

}
