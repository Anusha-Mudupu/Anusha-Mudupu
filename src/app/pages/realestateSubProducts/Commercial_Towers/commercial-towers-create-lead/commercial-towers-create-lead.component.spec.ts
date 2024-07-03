import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialTowersCreateLeadComponent } from './commercial-towers-create-lead.component';

describe('CommercialTowersCreateLeadComponent', () => {
  let component: CommercialTowersCreateLeadComponent;
  let fixture: ComponentFixture<CommercialTowersCreateLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialTowersCreateLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommercialTowersCreateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
