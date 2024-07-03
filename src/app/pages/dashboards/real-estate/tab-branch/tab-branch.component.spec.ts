/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBranchComponent } from './tab-branch.component';

describe('TabBranchComponent', () => {
  let component: TabBranchComponent;
  let fixture: ComponentFixture<TabBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBranchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
