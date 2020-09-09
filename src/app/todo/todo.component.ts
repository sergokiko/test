import { Component, OnInit } from '@angular/core';
import {TodoModel} from '../models/todo.model';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: TodoModel[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe(todos => {
      this.todoList = todos;
    });
  }
  ngOnInit(): void {
  }

}
