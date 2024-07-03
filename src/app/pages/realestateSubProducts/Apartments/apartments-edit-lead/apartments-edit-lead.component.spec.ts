import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsEditLeadComponent } from './apartments-edit-lead.component';

describe('ApartmentsEditLeadComponent', () => {
  let component: ApartmentsEditLeadComponent;
  let fixture: ComponentFixture<ApartmentsEditLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentsEditLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApartmentsEditLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
