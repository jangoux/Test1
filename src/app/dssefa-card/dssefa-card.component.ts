import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dssefa-card',
  templateUrl: './dssefa-card.component.html',
  styleUrls: ['./dssefa-card.component.scss']
})
export class DssefaCardComponent {
  @Input() variant: 'stacked' | 'inline' = 'inline'; // Default variant
  @Input() title: string = '';
  @Input() items: string[] = [];

  constructor() {}
}
