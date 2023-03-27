import { Component, OnInit } from '@angular/core';
import { Photos } from './photo.model';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [PhotoService]
})
export class PhotoComponent implements OnInit {
 selectedPhoto! : Photos;
  constructor() { }

  ngOnInit(): void {
  }

}
