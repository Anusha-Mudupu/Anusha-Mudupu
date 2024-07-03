/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailtemplateComponent } from './emailtemplate.component';

describe('EmailtemplateComponent', () => {
  let component: EmailtemplateComponent;
  let fixture: ComponentFixture<EmailtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailtemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
