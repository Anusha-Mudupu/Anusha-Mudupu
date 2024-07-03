/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySetupComponent } from './company-setup.component';

describe('CompanySetupComponent', () => {
  let component: CompanySetupComponent;
  let fixture: ComponentFixture<CompanySetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
