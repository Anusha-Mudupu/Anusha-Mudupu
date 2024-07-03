import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateStatusComponent } from './real-estate-status.component';

describe('RealEstateStatusComponent', () => {
  let component: RealEstateStatusComponent;
  let fixture: ComponentFixture<RealEstateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
