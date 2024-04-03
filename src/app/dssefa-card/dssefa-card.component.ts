import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dssefa-card',
  templateUrl: './dssefa-card.component.html',
  styleUrls: ['./dssefa-card.component.scss']
})
export class DssefaCardComponent {
  @Input() title: string ='';
  constructor() { }
}
