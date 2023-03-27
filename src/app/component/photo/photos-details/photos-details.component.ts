import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Photos } from '../photo.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrls: ['./photos-details.component.css']
})
export class PhotosDetailsComponent implements OnInit {
  id!: number;
  photo!:Photos;

  constructor(private photoService:PhotoService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params)=>{
        this.id = +params['id'];
        this.photo = this.photoService.getPhotos(this.id);
      }
    );
    
  }
  onEditPhoto(){
    this.router.navigate(['edit'],{relativeTo:this.route})

  }
  onDeletePhoto(){
    this.photoService.deletePhoto(this.id);
    this.router.navigate(['/photo'])

  }

}
