import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsLeadsComponent } from './apartments-leads.component';

describe('ApartmentsLeadsComponent', () => {
  let component: ApartmentsLeadsComponent;
  let fixture: ComponentFixture<ApartmentsLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentsLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApartmentsLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
