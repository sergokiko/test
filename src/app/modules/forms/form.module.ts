import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './components/forms/forms.component';
import {RouterModule} from '@angular/router';
import {UsersService} from '../../service/users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: FormsComponent
    }]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService
  ]
})
export class FormModule { }
