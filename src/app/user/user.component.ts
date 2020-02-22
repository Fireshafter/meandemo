import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [
    new User(1, 'Ruben', 'Cabrera', 'fireshafter@gmail.com'),
    new User(2, 'Mario', 'Nicolescu', 'mariocabaio@gmail.com'),
    new User(3, 'Fernando', 'Malagon', 'mrfapi99@gmail.com'),
    new User(4, 'Juli', 'Pestes', 'furbidelasnieves@gmail.com'),
  ];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    //this.getUsers();
    
  }

  /* getUsers(){
    this._userService.getUsers()
      .then(users => this.users = <User[]>users);
  } */

  create(user: User){
    this.users.push(user);    
  }

  destroy(user: User){    
    const i = this.users.indexOf(user);
    this.users.splice(i, 1);
  }

  update(users){    
    const i = this.users.indexOf(users.original);
    this.users[i] = users.edited;
  }

}
