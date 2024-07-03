/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsEditLeadComponent } from './units-edit-lead.component';

describe('UnitsEditLeadComponent', () => {
  let component: UnitsEditLeadComponent;
  let fixture: ComponentFixture<UnitsEditLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitsEditLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitsEditLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
