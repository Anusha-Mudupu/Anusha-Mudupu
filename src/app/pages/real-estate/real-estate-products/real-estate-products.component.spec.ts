/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateProductsComponent } from './real-estate-products.component';

describe('RealEstateProductsComponent', () => {
  let component: RealEstateProductsComponent;
  let fixture: ComponentFixture<RealEstateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
