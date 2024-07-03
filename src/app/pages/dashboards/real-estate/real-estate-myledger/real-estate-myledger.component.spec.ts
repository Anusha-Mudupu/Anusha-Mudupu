import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateMyledgerComponent } from './real-estate-myledger.component';

describe('RealEstateMyledgerComponent', () => {
  let component: RealEstateMyledgerComponent;
  let fixture: ComponentFixture<RealEstateMyledgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateMyledgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateMyledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
