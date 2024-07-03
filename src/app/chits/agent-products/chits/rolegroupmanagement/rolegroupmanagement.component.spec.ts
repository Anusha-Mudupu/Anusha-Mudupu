/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolegroupmanagementComponent } from './rolegroupmanagement.component';

describe('RolegroupmanagementComponent', () => {
  let component: RolegroupmanagementComponent;
  let fixture: ComponentFixture<RolegroupmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolegroupmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolegroupmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
