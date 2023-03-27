import { Component, Input, OnInit } from '@angular/core';
import { Albums } from '../../album.model';

@Component({
  selector: 'app-album-itemss',
  templateUrl: './album-itemss.component.html',
  styleUrls: ['./album-itemss.component.css']
})
export class AlbumItemssComponent implements OnInit {
  @Input() aayush!:any;
  @Input() album!:Albums;
  @Input() index!:number;
  constructor() { }

  ngOnInit(): void {
     console.log(this.aayush);
     
   }

}
