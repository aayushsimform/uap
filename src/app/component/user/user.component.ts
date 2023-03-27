import { Component, OnInit } from '@angular/core';
import { Users } from './user.model';
import { UserService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  selectedUser! : Users;
  constructor(private userService:UserService) { }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  ngOnInit(): void {
    this.userService.userSelected.subscribe((
      (user:Users)=>{
        this.selectedUser = user
      }
    ))
  }

}
