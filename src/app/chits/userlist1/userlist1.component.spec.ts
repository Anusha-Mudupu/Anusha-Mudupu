/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userlist1Component } from './userlist1.component';

describe('Userlist1Component', () => {
  let component: Userlist1Component;
  let fixture: ComponentFixture<Userlist1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userlist1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Userlist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
