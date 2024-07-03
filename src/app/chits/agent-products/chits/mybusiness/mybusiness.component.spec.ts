/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybusinessComponent } from './mybusiness.component';

describe('MybusinessComponent', () => {
  let component: MybusinessComponent;
  let fixture: ComponentFixture<MybusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MybusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MybusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
