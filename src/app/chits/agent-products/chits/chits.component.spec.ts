/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitsComponent } from './chits.component';

describe('ChitsComponent', () => {
  let component: ChitsComponent;
  let fixture: ComponentFixture<ChitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
