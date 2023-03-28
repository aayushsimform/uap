import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../users.service';
import { Users } from '../user.model';
@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(private userService:UserService) { }
  userForm!:FormGroup;

  ngOnInit(): void {
    this.initForm();
  }
  
  private initForm(){
    let first_name ='';
    let last_name = '';
    let phone_number;

    this.userForm = new FormGroup({
      'first_name': new FormControl(first_name, Validators.required),
      'last_name':new FormControl(last_name, Validators.required),
      'phone_number': new FormControl(phone_number, Validators.required)
    })
  }
  displayStyle = "none";
   
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  onSubmit(){
    const newUser = new Users(
      this.userForm.value['first_name'],
      this.userForm.value['last_name'],
      this.userForm.value['phone_number']
    );
    console.log(newUser);
    
    this.userService.addUser(newUser);
   
    
    
  }
  onCancel(){
      
  }

}
