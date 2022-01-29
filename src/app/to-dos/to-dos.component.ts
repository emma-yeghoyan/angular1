import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../models/todo.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {


  list: ITodo[] = [];

  constructor(private userService: UsersService) { 
    this.list = userService.getTodoListData();
  }

  ngOnInit(): void {
  }

}
