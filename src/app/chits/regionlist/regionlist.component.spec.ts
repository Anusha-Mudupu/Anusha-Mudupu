/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionlistComponent } from './regionlist.component';

describe('RegionlistComponent', () => {
  let component: RegionlistComponent;
  let fixture: ComponentFixture<RegionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
