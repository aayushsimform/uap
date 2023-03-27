import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from '../user.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId!: string;
  user!: Users;
  id!: number;
  constructor(private userService : UserService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params)=>{

        this.userId = params['userId'];

        
        this.userService.getUserDetail(this.userId).subscribe(user => {
          this.user = user;
        console.log('Userrs',this.user);
        }
          
          
          );
      }
        
    );

  }
  onEditUser(){
    this.router.navigate(['edit'],{relativeTo : this.route})
  }
  onDeleteUser(){
    this.userService.deleteUser(this.userId);
    this.router.navigate(['/user']);
  }

}
