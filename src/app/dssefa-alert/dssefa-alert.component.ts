import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentDirective } from '../directives/dynamic-component.directive';

@Component({
  selector: 'app-dssefa-alert',
  templateUrl: './dssefa-alert.component.html',
  styleUrls: ['./dssefa-alert.component.scss']
})
export class DssefaAlertComponent implements OnInit {
  @Input() icon: string = '<mat-icon>edit</mat-icon>';
  @Input() title: string = 'Title';
  @Input() description: string = 'Description: isso deve ser substituído pelo texto descritivo do card';
  @Input() closeIcon: boolean = true;
  @Input() variant: 'success' | 'warning' | 'attention' | 'info' = 'info';

  @ViewChild(DynamicComponentDirective, { static: true }) dynamicComponentHost?: DynamicComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadDynamicComponent();
  }

  private loadDynamicComponent(): void {
    const viewContainerRef = this.dynamicComponentHost?.viewContainerRef;
    if (viewContainerRef) {
      viewContainerRef.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponentDirective);
      const componentRef = viewContainerRef.createComponent(componentFactory);
    }
  }
}
