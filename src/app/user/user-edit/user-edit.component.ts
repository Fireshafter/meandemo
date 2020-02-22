import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  editUser: User = new User;
  @Output() updateUserEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.editUser.from(this.user);
  }

  update(){
    this.editUser.editable=false;
    this.updateUserEvent.emit({
      original: this.user,
      edited: this.editUser
    });    
  }

}
