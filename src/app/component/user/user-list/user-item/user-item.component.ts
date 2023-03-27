import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input()
  user!: Users;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
