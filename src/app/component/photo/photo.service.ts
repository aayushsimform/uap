import { EventEmitter, Injectable } from '@angular/core';
import { Photos } from './photo.model';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PhotoService {
  photoChanged = new Subject<Photos[]>();
  PhotoSelected = new EventEmitter<Photos>();
  Photo: Photos[]=[
      new Photos('2234234234','32432423423','Vadapav','https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
      new Photos('23232323232','232323232323','Sandwitch','https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
      new Photos('23232323232','232323232323','Burger','https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
      new Photos('23232323232','232323232323','Pizza','https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
      
     
     ];
 //private recipes: Recipe[] = [];
  constructor(private http:HttpClient) {}
  url = "http://localhost:3000"
  setPhoto(photo: Photos[]) {
    this.Photo = photo;

    this.photoChanged.next(this.Photo.slice());
  }
 getPhoto() {
    return this.Photo.slice();
  }
// getUser():Observable<Users[]>{
//     return this.http.get<Users[]>(`${this.url}/user`).pipe(
//         map((response: any) => {
//           console.log(response);
//           return response;
//         })
//       );

// }

  getPhotos(index: number) {
    return this.Photo[index];
  }

  addPhoto(photo : Photos) {
    this.Photo.push(photo);
    this.photoChanged.next(this.Photo.slice());
  }

  updatePhoto(index: number, newPhoto: Photos) {
    this.Photo[index] = newPhoto;
    this.photoChanged.next(this.Photo.slice());
  }

  deletePhoto(index: number) {
    this.Photo.splice(index, 1);
    this.photoChanged.next(this.Photo.slice());
  }
}
