import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  list:any;
  constructor() {
    if (JSON.parse(localStorage.getItem('todoList'))) {
      this.list = JSON.parse(localStorage.getItem('todoList'));
    } else {
      this.list = [
        {
          id: 1,
          name: 'Todo 1',
          status: 'completed',
          description: `Todo 1 description.`,
        },
        {
          id: 2,
          name: 'Todo 2',
          status: 'pending',
          description: `Todo 2 description.`
        },
        {
          id: 3,
          name: 'Todo 3',
          status: 'pending',
          description: `Todo 3 description.`
        },
        {
          id: 4,
          name: 'Todo 4',
          status: 'completed',
          description: `Todo 4 description.`
        }
      ];
    }
    console.log(" list :: ", this.list);
  }

  addTodo(_todo) {
    _todo.id = this.list.length + 1;
    this.list.push(_todo);
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  removeTodo(_todo) {
    this.list.forEach((todo, index) => {
      if (_todo.id == todo.id) {
        this.list.splice(index, 1);
      }
    });
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  fetchTodos() {
    if (JSON.parse(localStorage.getItem('todoList'))) {
      this.list = JSON.parse(localStorage.getItem('todoList'));
    } else {
      console.log(" no localStorage available");
    }
  }
}
