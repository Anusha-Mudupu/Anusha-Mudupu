/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerwiseComponent } from './managerwise.component';

describe('ManagerwiseComponent', () => {
  let component: ManagerwiseComponent;
  let fixture: ComponentFixture<ManagerwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerwiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
