import { EventEmitter, Injectable } from '@angular/core';
import { Users } from './user.model';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
  usersChanged = new Subject<Users[]>();
  userSelected = new EventEmitter<Users>();
  users: Users[]=[
      new Users('aayush','chauhan', 12123454),
      new Users('vishal','chauhan', 12123454),
      new Users('John','cena', 12123454),
      new Users('Vicky','Bist', 12123454),
     
     ];
 //private recipes: Recipe[] = [];
  constructor(private http:HttpClient) {}
  url = "http://localhost:3000"
  setUser(user: Users[]) {
    this.users = user;

    this.usersChanged.next(this.users.slice());
  }
//   getUser() {
//     return this.users.slice();
//   }
getUser():Observable<Users[]>{
    return this.http.get<Users[]>(`${this.url}/user`).pipe(
        map((response: any) => {
          
          return response;
        })
      );

}

  // getUsers(index: number) {
  //   return this.users[index];
  // }
   getUserDetail(id:string):Observable<Users>{
    console.log("Hello this is Get User",id);
    
    return this.http.get<Users>(`${this.url}/user/${id}`).pipe(
        map((response: any) => {
          console.log(response);
          return response;
        })
      );
   }
  addUser(user : Users) {
    console.log(user);
    return this.http
    .post(`${this.url}/user`, user)
    .subscribe((response) => response); 
    
  }

  // updateUser(index: number, newUser: Users) {
  //   this.users[index] = newUser;
  //   this.usersChanged.next(this.users.slice());
  // }

  updateUser(_id: string, newUser: Users){
    return this.http
    .put(`${this.url}/user/${_id}`, newUser)
    .subscribe((response) => response);
  }
  deleteUser(_id: string){
    return this.http
    .delete(`${this.url}/user/${_id}`)
    .subscribe((response) => response);
  }

  // deleteUser(index: number) {
  //   this.users.splice(index, 1);
  //   this.usersChanged.next(this.users.slice());
  // }
}
