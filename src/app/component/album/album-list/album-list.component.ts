import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Albums } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
   aayush :any = '';
  albums!: Albums[];
  constructor(private albumService:AlbumService,private router:Router,private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.albums = this.albumService.getAlbum();
  }
  onNewAlbum(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
