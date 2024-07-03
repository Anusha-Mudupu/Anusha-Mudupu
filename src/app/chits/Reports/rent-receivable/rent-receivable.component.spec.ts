import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentReceivableComponent } from './rent-receivable.component';

describe('RentReceivableComponent', () => {
  let component: RentReceivableComponent;
  let fixture: ComponentFixture<RentReceivableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentReceivableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentReceivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
