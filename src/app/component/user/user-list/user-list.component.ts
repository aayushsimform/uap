import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users} from '../user.model';
import {  UserService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!:Users[];
 
  constructor(private userService:UserService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      user =>{
        this.users = user;
      }
    )
    console.log(this.users);
    
   
  }
  onNewUser(){
    this.router.navigate(['newuser'])
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
