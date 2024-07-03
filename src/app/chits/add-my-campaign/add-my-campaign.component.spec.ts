/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyCampaignComponent } from './add-my-campaign.component';

describe('AddMyCampaignComponent', () => {
  let component: AddMyCampaignComponent;
  let fixture: ComponentFixture<AddMyCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMyCampaignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMyCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
