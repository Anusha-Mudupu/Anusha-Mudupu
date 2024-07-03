import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEsateUpdateRegionComponent } from './real-esate-update-region.component';

describe('RealEsateUpdateRegionComponent', () => {
  let component: RealEsateUpdateRegionComponent;
  let fixture: ComponentFixture<RealEsateUpdateRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEsateUpdateRegionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEsateUpdateRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
