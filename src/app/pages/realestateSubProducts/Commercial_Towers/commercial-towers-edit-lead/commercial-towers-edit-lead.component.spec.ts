import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialTowersEditLeadComponent } from './commercial-towers-edit-lead.component';

describe('CommercialTowersEditLeadComponent', () => {
  let component: CommercialTowersEditLeadComponent;
  let fixture: ComponentFixture<CommercialTowersEditLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialTowersEditLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommercialTowersEditLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
