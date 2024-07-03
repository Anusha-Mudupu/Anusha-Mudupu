import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadscreenComponent } from './leadscreen.component';

describe('LeadscreenComponent', () => {
  let component: LeadscreenComponent;
  let fixture: ComponentFixture<LeadscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadscreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
