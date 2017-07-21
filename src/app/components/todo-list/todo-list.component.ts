import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todoList: Object[];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this._todoService.getTodos();
  }

}
