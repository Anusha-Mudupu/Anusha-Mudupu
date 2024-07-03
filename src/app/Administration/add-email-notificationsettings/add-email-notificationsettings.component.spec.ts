import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmailNotificationsettingsComponent } from './add-email-notificationsettings.component';

describe('AddEmailNotificationsettingsComponent', () => {
  let component: AddEmailNotificationsettingsComponent;
  let fixture: ComponentFixture<AddEmailNotificationsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmailNotificationsettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmailNotificationsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
