import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] | null;
  selectedUser: IUser | null = null;
  constructor(private userService: UsersService) { 
    this.users = this.userService.getUsersData();
  }

  ngOnInit(): void {
  }

  hendelUserClick(user: IUser) {
    this.selectedUser = user;   
  }

}
