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

}
