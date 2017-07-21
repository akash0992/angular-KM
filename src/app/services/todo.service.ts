import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }

  getTodos() : Object[] {
    return [
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
}
