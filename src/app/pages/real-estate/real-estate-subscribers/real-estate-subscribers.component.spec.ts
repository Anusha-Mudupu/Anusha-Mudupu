/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateSubscribersComponent } from './real-estate-subscribers.component';

describe('RealEstateSubscribersComponent', () => {
  let component: RealEstateSubscribersComponent;
  let fixture: ComponentFixture<RealEstateSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateSubscribersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
