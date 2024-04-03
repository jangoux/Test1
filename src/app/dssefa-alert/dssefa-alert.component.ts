import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dssefa-alert',
  templateUrl: './dssefa-alert.component.html',
  styleUrls: ['./dssefa-alert.component.scss']
})
export class DssefaAlertComponent {
  @Input() icon: string = '<mat-icon>edit</mat-icon>';
  @Input() closeIcon: boolean = true;
  @Input() variant: 'success' | 'warning' | 'attention' | 'info' = 'info';
}

