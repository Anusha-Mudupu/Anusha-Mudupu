import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationbtwDatesComponent } from './registrationbtw-dates.component';

describe('RegistrationbtwDatesComponent', () => {
  let component: RegistrationbtwDatesComponent;
  let fixture: ComponentFixture<RegistrationbtwDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationbtwDatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationbtwDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
