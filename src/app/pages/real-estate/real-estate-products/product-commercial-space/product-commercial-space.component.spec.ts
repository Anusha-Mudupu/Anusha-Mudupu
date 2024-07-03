/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCommercialSpaceComponent } from './product-commercial-space.component';

describe('ProductCommercialSpaceComponent', () => {
  let component: ProductCommercialSpaceComponent;
  let fixture: ComponentFixture<ProductCommercialSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCommercialSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCommercialSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
