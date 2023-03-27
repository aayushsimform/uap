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
  id!: number;
  user!: Users;

  constructor(private userService : UserService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params)=>{
        this.id = +params['id'];
        this.user = this.userService.getUsers(this.id);
      }
        
    );

  }
  onEditUser(){
    this.router.navigate(['edit'],{relativeTo : this.route})
  }
  onDeleteUser(){
    this.userService.deleteUser(this.id);
    this.router.navigate(['/user']);
  }

}
