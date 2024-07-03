/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSourceComponent } from './admin-source.component';

describe('AdminSourceComponent', () => {
  let component: AdminSourceComponent;
  let fixture: ComponentFixture<AdminSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
