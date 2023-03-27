import { EventEmitter, Injectable } from '@angular/core';
import { Albums } from './album.model';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AlbumService {
  albumChanged = new Subject<Albums[]>();
  Albumselected = new EventEmitter<Albums>();
  Album: Albums[]=[
      new Albums('32432423423','Recipes'),
      new Albums('232323232323','Cafe'),
      new Albums('232323232323','Drinks'),
      new Albums('232323232323','Beverages'),
      
     
     ];
 //private recipes: Recipe[] = [];
  constructor(private http:HttpClient) {}
  url = "http://localhost:3000"
  setPhoto(Album: Albums[]) {
    this.Album = Album;

    this.albumChanged.next(this.Album.slice());
  }
 getAlbum() {
    return this.Album.slice();
  }
// getUser():Observable<Users[]>{
//     return this.http.get<Users[]>(`${this.url}/user`).pipe(
//         map((response: any) => {
//           console.log(response);
//           return response;
//         })
//       );

// }

  getAlbums(index: number) {
    return this.Album[index];
  }

  addAlbum(album : Albums) {
    this.Album.push(album);
    this.albumChanged.next(this.Album.slice());
  }

  updateAlbum(index: number, newAlbum: Albums) {
    this.Album[index] = newAlbum;
    this.albumChanged.next(this.Album.slice());
  }

  deleteAlbum(index: number) {
    this.Album.splice(index, 1);
    this.albumChanged.next(this.Album.slice());
  }
}
