import { Component, Input, Output } from '@angular/core';
import { IUser } from '../models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
  users: IUser[] | null;

  constructor(private userService: UsersService) { 
    this.users = this.userService.getUsersData();
  }

  ngOnInit(): void {
  }

}
