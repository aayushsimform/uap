import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Albums } from './album.model';
import { AlbumService } from './album.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers:[AlbumService]
})
export class AlbumComponent implements OnInit {
  selectedAlbum!: Albums[];
  constructor() { }
  

  ngOnInit(): void {
    
  }
 

}
