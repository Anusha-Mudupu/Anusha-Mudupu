/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotificationSettingsComponent } from './create-notification-settings.component';

describe('CreateNotificationSettingsComponent', () => {
  let component: CreateNotificationSettingsComponent;
  let fixture: ComponentFixture<CreateNotificationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNotificationSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNotificationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
