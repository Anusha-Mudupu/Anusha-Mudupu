import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialSpaceCreateLeadComponent } from './commercial-space-create-lead.component';

describe('CommercialSpaceCreateLeadComponent', () => {
  let component: CommercialSpaceCreateLeadComponent;
  let fixture: ComponentFixture<CommercialSpaceCreateLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialSpaceCreateLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommercialSpaceCreateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
