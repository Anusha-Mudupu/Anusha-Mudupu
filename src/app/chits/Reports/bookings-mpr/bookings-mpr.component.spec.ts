/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsMPRComponent } from './bookings-mpr.component';

describe('BookingsMPRComponent', () => {
  let component: BookingsMPRComponent;
  let fixture: ComponentFixture<BookingsMPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsMPRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingsMPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
