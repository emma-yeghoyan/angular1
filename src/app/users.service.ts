import { Injectable } from '@angular/core';
import { ITodo } from './models/todo.model';
import { IUser } from './models/user.model';

@Injectable()
export class UsersService {

  constructor() { }

  getUsersData(): IUser[] {
    return [
      {
        id: 1,
        name: 'User1',
        todos: [
          {
            id: 1,
            title: "Todo 1",
          },
          {
            id: 2,
            title: "Todo 2",
          },
          {
            id: 3,
            title: "Todo 3",
          }
        ]
      },
      {
        id: 2,
        name: 'User2',
        todos: [
          {
            id: 1,
            title: "Todo 1",
          }
        ]
      },
      {
        id: 3,
        name: 'User3',
        todos: []
      },
      {
        id: 4,
        name: 'User4',
        todos: [
          {
            id: 1,
            title: "Todo 1",
          },
          {
            id: 2,
            title: "Todo 2",
          }
        ]
      }
    ]
  }

  getTodoListData(): ITodo[] {
    return [
      {
        id: 1,
        title: 'Todo1',
      },
      {
        id: 2,
        title: 'Todo2',
      },
      {
        id: 3,
        title: 'Todo3',
      },
      {
        id: 4,
        title: 'Todo4',
      },
      {
        id: 5,
        title: 'Todo5',
      }
    ]
  }
}
