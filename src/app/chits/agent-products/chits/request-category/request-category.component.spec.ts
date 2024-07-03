/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCategoryComponent } from './request-category.component';

describe('RequestCategoryComponent', () => {
  let component: RequestCategoryComponent;
  let fixture: ComponentFixture<RequestCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
