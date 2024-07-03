/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstatAgentProductsComponent } from './real-estat-agent-products.component';

describe('RealEstatAgentProductsComponent', () => {
  let component: RealEstatAgentProductsComponent;
  let fixture: ComponentFixture<RealEstatAgentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstatAgentProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstatAgentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
