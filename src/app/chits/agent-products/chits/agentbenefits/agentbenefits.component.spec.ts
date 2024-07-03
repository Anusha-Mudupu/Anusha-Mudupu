/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentbenefitsComponent } from './agentbenefits.component';

describe('AgentbenefitsComponent', () => {
  let component: AgentbenefitsComponent;
  let fixture: ComponentFixture<AgentbenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentbenefitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentbenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
