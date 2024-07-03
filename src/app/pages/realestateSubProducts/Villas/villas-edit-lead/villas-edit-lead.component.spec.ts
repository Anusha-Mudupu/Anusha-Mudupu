/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasEditLeadComponent } from './villas-edit-lead.component';

describe('VillasEditLeadComponent', () => {
  let component: VillasEditLeadComponent;
  let fixture: ComponentFixture<VillasEditLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillasEditLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillasEditLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
