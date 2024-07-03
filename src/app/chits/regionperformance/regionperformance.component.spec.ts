/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionperformanceComponent } from './regionperformance.component';

describe('RegionperformanceComponent', () => {
  let component: RegionperformanceComponent;
  let fixture: ComponentFixture<RegionperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionperformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
