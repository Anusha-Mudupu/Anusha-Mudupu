/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorWiseRegistrationComponent } from './floor-wise-registration.component';

describe('FloorWiseRegistrationComponent', () => {
  let component: FloorWiseRegistrationComponent;
  let fixture: ComponentFixture<FloorWiseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorWiseRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloorWiseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
