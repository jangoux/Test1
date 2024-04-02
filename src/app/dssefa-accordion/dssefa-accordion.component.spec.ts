import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DssefaAccordionComponent } from './dssefa-accordion.component';

describe('DssefaAccordionComponent', () => {
  let component: DssefaAccordionComponent;
  let fixture: ComponentFixture<DssefaAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DssefaAccordionComponent]
    });
    fixture = TestBed.createComponent(DssefaAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
