/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAdministratorComponent } from './employee-administrator.component';

describe('EmployeeAdministratorComponent', () => {
  let component: EmployeeAdministratorComponent;
  let fixture: ComponentFixture<EmployeeAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAdministratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
