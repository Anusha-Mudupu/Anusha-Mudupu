import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSmsnotificationsettingsComponent } from './update-smsnotificationsettings.component';

describe('UpdateSmsnotificationsettingsComponent', () => {
  let component: UpdateSmsnotificationsettingsComponent;
  let fixture: ComponentFixture<UpdateSmsnotificationsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSmsnotificationsettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSmsnotificationsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
