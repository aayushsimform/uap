import { Component, Input, OnInit } from '@angular/core';
import { Photos } from '../../photo.model';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {
  @Input()
  photo!: Photos;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
