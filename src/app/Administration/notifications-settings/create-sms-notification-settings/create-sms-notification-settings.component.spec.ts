import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSmsNotificationSettingsComponent } from './create-sms-notification-settings.component';

describe('CreateSmsNotificationSettingsComponent', () => {
  let component: CreateSmsNotificationSettingsComponent;
  let fixture: ComponentFixture<CreateSmsNotificationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSmsNotificationSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSmsNotificationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
