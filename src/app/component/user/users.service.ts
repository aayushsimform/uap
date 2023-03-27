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
          console.log(response);
          return response;
        })
      );

}

  getUsers(index: number) {
    return this.users[index];
  }

  addUser(user : Users) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

  updateUser(index: number, newUser: Users) {
    this.users[index] = newUser;
    this.usersChanged.next(this.users.slice());
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
  }
}