/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeadComponent } from './create-lead.component';

describe('CreateLeadComponent', () => {
  let component: CreateLeadComponent;
  let fixture: ComponentFixture<CreateLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
