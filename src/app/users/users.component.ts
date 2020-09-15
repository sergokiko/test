import { Component, OnInit } from '@angular/core';
import {UserModel} from '../models/user.model';
import {UsersService} from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users: UserModel[] = [];
  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit(): void {
  }

  showPostOfUser(id: number): void {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(json => console.log(json));
  }
  }

