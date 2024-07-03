import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateNotificationTemplatesComponent } from './real-estate-notification-templates.component';

describe('RealEstateNotificationTemplatesComponent', () => {
  let component: RealEstateNotificationTemplatesComponent;
  let fixture: ComponentFixture<RealEstateNotificationTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateNotificationTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateNotificationTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
