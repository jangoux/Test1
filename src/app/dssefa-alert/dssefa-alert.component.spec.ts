import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DssefaAlertComponent } from './dssefa-alert.component';

describe('DssefaAlertComponent', () => {
  let component: DssefaAlertComponent;
  let fixture: ComponentFixture<DssefaAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DssefaAlertComponent]
    });
    fixture = TestBed.createComponent(DssefaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
