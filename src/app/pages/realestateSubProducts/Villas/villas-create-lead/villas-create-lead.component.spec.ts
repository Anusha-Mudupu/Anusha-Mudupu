/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasCreateLeadComponent } from './villas-create-lead.component';

describe('VillasCreateLeadComponent', () => {
  let component: VillasCreateLeadComponent;
  let fixture: ComponentFixture<VillasCreateLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillasCreateLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillasCreateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
