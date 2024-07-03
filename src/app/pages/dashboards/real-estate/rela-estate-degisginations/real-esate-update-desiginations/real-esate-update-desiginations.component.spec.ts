/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEsateUpdateDesiginationsComponent } from './real-esate-update-desiginations.component';

describe('RealEsateUpdateDesiginationsComponent', () => {
  let component: RealEsateUpdateDesiginationsComponent;
  let fixture: ComponentFixture<RealEsateUpdateDesiginationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEsateUpdateDesiginationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEsateUpdateDesiginationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
