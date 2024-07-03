/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantlistComponent } from './vacantlist.component';

describe('VacantlistComponent', () => {
  let component: VacantlistComponent;
  let fixture: ComponentFixture<VacantlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacantlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
