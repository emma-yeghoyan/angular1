import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {

  @Input()
  todo: ITodo | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
