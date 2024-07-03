import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DARRegistrationComponent } from './dar-registration.component';

describe('DARRegistrationComponent', () => {
  let component: DARRegistrationComponent;
  let fixture: ComponentFixture<DARRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DARRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DARRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
