/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateaddproductComponent } from './realestateaddproduct.component';

describe('RealestateaddproductComponent', () => {
  let component: RealestateaddproductComponent;
  let fixture: ComponentFixture<RealestateaddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealestateaddproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealestateaddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
