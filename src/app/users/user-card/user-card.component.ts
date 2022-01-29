import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input()
  userData: IUser | null = null;

  showTodoList = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.showTodoList = !this.showTodoList;
  }

}
