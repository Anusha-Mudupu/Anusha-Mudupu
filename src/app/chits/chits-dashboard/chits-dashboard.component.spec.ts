/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitsDashboardComponent } from './chits-dashboard.component';

describe('ChitsDashboardComponent', () => {
  let component: ChitsDashboardComponent;
  let fixture: ComponentFixture<ChitsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitsDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
