/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessunitComponent } from './businessunit.component';

describe('BusinessunitComponent', () => {
  let component: BusinessunitComponent;
  let fixture: ComponentFixture<BusinessunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessunitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
