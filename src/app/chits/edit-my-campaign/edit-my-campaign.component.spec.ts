/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyCampaignComponent } from './edit-my-campaign.component';

describe('EditMyCampaignComponent', () => {
  let component: EditMyCampaignComponent;
  let fixture: ComponentFixture<EditMyCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMyCampaignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMyCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
