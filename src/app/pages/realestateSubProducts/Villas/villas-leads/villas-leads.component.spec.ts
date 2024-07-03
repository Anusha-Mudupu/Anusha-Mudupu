/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasLeadsComponent } from './villas-leads.component';

describe('VillasLeadsComponent', () => {
  let component: VillasLeadsComponent;
  let fixture: ComponentFixture<VillasLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillasLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillasLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
