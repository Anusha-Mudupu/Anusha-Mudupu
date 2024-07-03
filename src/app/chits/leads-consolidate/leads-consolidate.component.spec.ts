import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsConsolidateComponent } from './leads-consolidate.component';

describe('LeadsConsolidateComponent', () => {
  let component: LeadsConsolidateComponent;
  let fixture: ComponentFixture<LeadsConsolidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadsConsolidateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadsConsolidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
