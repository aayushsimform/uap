import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, SelectMultipleControlValueAccessor, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from '../user.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id!: number;
  userId!:string;
  editMode = false;
  userForm!: FormGroup;
  constructor( private route:ActivatedRoute,
    private userService:UserService,
    private router:Router){
    }

    //use Reactive form Approach
    private initForm(){
      let first_name ='';
      let last_name = '';
      let phone_number ;
  
      if(this.editMode){
      this.userService.getUserDetail(this.userId).subscribe(user =>{
        phone_number = user.phone_number;
        first_name = user.first_name;
        last_name = user.last_name;   
        });
        
        
        
        
       
      }
  
      this.userForm = new FormGroup({
        'first_name': new FormControl(first_name, Validators.required),
        'last_name':new FormControl(last_name, Validators.required),
        'phone_number': new FormControl(phone_number, Validators.required)
      })
    }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = + params['id'];
        this.editMode = params['id']!= null;
        console.log(this.editMode);
        this.initForm();
        
      }
    )
  }

   //on form submit 
   onSubmit(){
    const newUser = new Users(
      this.userForm.value['first_name'],
      this.userForm.value['last_name'],
      this.userForm.value['phone_number']
    );
    if(this.editMode){
      this.userService.updateUser(this.userId, newUser);

    }else{
      this.userService.addUser(newUser);
    }
    
    
  }
  onCancel(){
       this.router.navigate(['../'],{ relativeTo : this.route})
  }


}
