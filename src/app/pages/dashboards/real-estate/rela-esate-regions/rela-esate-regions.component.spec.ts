/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaEsateRegionsComponent } from './rela-esate-regions.component';

describe('RelaEsateRegionsComponent', () => {
  let component: RelaEsateRegionsComponent;
  let fixture: ComponentFixture<RelaEsateRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelaEsateRegionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelaEsateRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
