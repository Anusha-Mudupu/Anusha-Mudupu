/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsCreateLeadComponent } from './units-create-lead.component';

describe('UnitsCreateLeadComponent', () => {
  let component: UnitsCreateLeadComponent;
  let fixture: ComponentFixture<UnitsCreateLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitsCreateLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitsCreateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
