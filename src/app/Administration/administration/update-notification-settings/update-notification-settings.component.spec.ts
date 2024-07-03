/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotificationSettingsComponent } from './update-notification-settings.component';

describe('UpdateNotificationSettingsComponent', () => {
  let component: UpdateNotificationSettingsComponent;
  let fixture: ComponentFixture<UpdateNotificationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateNotificationSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateNotificationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
