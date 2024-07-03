import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagersComponent } from './employee-managers.component';

describe('EmployeeManagersComponent', () => {
  let component: EmployeeManagersComponent;
  let fixture: ComponentFixture<EmployeeManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeManagersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
