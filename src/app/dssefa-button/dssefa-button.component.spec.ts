import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DssefaButtonComponent } from './dssefa-button.component';

describe('DssefaButtonComponent', () => {
  let component: DssefaButtonComponent;
  let fixture: ComponentFixture<DssefaButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DssefaButtonComponent]
    });
    fixture = TestBed.createComponent(DssefaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
