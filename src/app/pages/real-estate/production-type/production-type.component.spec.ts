/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionTypeComponent } from './production-type.component';

describe('ProductionTypeComponent', () => {
  let component: ProductionTypeComponent;
  let fixture: ComponentFixture<ProductionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
