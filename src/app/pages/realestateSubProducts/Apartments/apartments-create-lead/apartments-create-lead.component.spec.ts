import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsCreateLeadComponent } from './apartments-create-lead.component';

describe('ApartmentsCreateLeadComponent', () => {
  let component: ApartmentsCreateLeadComponent;
  let fixture: ComponentFixture<ApartmentsCreateLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentsCreateLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApartmentsCreateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
