import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../../models/user.model';
import {UsersService} from '../../../../service/users.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
users: UserModel[];
user: UserModel;
form: FormGroup;
  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      userId: new FormControl(1)
    });
  }



  // tslint:disable-next-line:typedef
  submit() {
    const id = this.form.value.userId;
    this.userService.getUserById(id).subscribe(u => {
      this.user = u;
    }
   );
  }
}
