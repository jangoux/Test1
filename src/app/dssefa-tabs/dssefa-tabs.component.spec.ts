import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DssefaTabsComponent } from './dssefa-tabs.component';

describe('DssefaTabsComponent', () => {
  let component: DssefaTabsComponent;
  let fixture: ComponentFixture<DssefaTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DssefaTabsComponent]
    });
    fixture = TestBed.createComponent(DssefaTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
