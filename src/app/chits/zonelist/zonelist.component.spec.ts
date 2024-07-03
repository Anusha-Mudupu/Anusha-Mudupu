/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelistComponent } from './zonelist.component';

describe('ZonelistComponent', () => {
  let component: ZonelistComponent;
  let fixture: ComponentFixture<ZonelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZonelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
