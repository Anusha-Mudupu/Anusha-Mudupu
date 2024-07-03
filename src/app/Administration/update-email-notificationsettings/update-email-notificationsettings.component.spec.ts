/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmailNotificationsettingsComponent } from './update-email-notificationsettings.component';

describe('UpdateEmailNotificationsettingsComponent', () => {
  let component: UpdateEmailNotificationsettingsComponent;
  let fixture: ComponentFixture<UpdateEmailNotificationsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmailNotificationsettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEmailNotificationsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
