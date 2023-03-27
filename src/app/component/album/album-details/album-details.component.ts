import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Albums } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  id!: number;
  album!:Albums;
  constructor(private albumService: AlbumService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = + params['id'];
        this.album = this.albumService.getAlbums(this.id);
      }
    )
  }

  onEditAlbum(){
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
    this.router.navigate(['edit'],{relativeTo:this.route})
    
  }
  onDeleteAlbum() {
    this.albumService.deleteAlbum(this.id);
    this.router.navigate(['/album']);
  }


}
