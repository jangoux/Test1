import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DssefaInputComponent } from './dssefa-input.component';

describe('DssefaInputComponent', () => {
  let component: DssefaInputComponent;
  let fixture: ComponentFixture<DssefaInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DssefaInputComponent]
    });
    fixture = TestBed.createComponent(DssefaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
