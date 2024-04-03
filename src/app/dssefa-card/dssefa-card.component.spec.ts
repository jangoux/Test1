import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DssefaCardComponent } from './dssefa-card.component';

describe('DssefaCardComponent', () => {
  let component: DssefaCardComponent;
  let fixture: ComponentFixture<DssefaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DssefaCardComponent]
    });
    fixture = TestBed.createComponent(DssefaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
