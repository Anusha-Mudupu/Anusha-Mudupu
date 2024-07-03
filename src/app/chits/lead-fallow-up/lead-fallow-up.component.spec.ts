import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadFallowUpComponent } from './lead-fallow-up.component';

describe('LeadFallowUpComponent', () => {
  let component: LeadFallowUpComponent;
  let fixture: ComponentFixture<LeadFallowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadFallowUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadFallowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
