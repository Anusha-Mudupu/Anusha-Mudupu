import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcutiveWiseBookingsComponent } from './excutive-wise-bookings.component';

describe('ExcutiveWiseBookingsComponent', () => {
  let component: ExcutiveWiseBookingsComponent;
  let fixture: ComponentFixture<ExcutiveWiseBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcutiveWiseBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcutiveWiseBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
