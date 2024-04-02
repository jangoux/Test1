import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() title: string =''; // Title property to be set by the user
  @Input() description: string ='' ; // Description property to be set by the user

  constructor() { }
}
