/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateagentComponent } from './upadateagent.component';

describe('UpadateagentComponent', () => {
  let component: UpadateagentComponent;
  let fixture: ComponentFixture<UpadateagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpadateagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpadateagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
