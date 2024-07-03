/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaignsComponent } from './add-campaigns.component';

describe('AddCampaignsComponent', () => {
  let component: AddCampaignsComponent;
  let fixture: ComponentFixture<AddCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCampaignsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
