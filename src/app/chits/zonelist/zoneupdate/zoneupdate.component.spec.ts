/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneupdateComponent } from './zoneupdate.component';

describe('ZoneupdateComponent', () => {
  let component: ZoneupdateComponent;
  let fixture: ComponentFixture<ZoneupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
