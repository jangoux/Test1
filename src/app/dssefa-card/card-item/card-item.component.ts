import { Component, Input } from '@angular/core';
import { DssefaCardComponent } from '../dssefa-card.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() title: string = '';

  constructor(private parent: DssefaCardComponent) {} // Inject the parent component

  get variant(): 'stacked' | 'inline' {
    return this.parent.variant; // Access the variant from the parent
  }
}
