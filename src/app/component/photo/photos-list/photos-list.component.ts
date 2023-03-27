import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photos } from '../photo.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  photos!: Photos[];

  constructor(private photoService:PhotoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.photos = this.photoService.getPhoto();
  }
  onNewPhoto(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
