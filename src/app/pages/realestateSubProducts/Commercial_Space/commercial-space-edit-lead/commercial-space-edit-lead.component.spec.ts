import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialSpaceEditLeadComponent } from './commercial-space-edit-lead.component';

describe('CommercialSpaceEditLeadComponent', () => {
  let component: CommercialSpaceEditLeadComponent;
  let fixture: ComponentFixture<CommercialSpaceEditLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialSpaceEditLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommercialSpaceEditLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
