/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSettingsComponent } from './notifications-settings.component';

describe('NotificationsSettingsComponent', () => {
  let component: NotificationsSettingsComponent;
  let fixture: ComponentFixture<NotificationsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
