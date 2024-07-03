import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadfollowupComponent } from './leadfollowup.component';

describe('LeadfollowupComponent', () => {
  let component: LeadfollowupComponent;
  let fixture: ComponentFixture<LeadfollowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadfollowupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadfollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
