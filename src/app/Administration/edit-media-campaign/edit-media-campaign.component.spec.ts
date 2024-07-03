/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMediaCampaignComponent } from './edit-media-campaign.component';

describe('EditMediaCampaignComponent', () => {
  let component: EditMediaCampaignComponent;
  let fixture: ComponentFixture<EditMediaCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMediaCampaignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMediaCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
