/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotificationsettingsComponent } from './edit-notificationsettings.component';

describe('EditNotificationsettingsComponent', () => {
  let component: EditNotificationsettingsComponent;
  let fixture: ComponentFixture<EditNotificationsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNotificationsettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditNotificationsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
