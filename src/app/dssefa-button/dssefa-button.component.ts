import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-dssefa-button',
  templateUrl: './dssefa-button.component.html',
  styleUrls: ['./dssefa-button.component.scss'],

})
export class DssefaButtonComponent {
  @Input() icon: string = '';
  @Input() size: 'lg' | 'md' | 'sm' = 'md';
  @Input() label: string = 'Label';
  @Input() LeftIconEnabled: boolean = true;
  @Input() RightIconEnabled: boolean = true;
  @Input() variant: 'primary' | 'secondary' | 'tertiary' |'warning' | 'disabled'  = 'primary';
  constructor() {}

}
