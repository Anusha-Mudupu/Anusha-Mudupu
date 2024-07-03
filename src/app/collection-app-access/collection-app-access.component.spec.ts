/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionAppAccessComponent } from './collection-app-access.component';

describe('CollectionAppAccessComponent', () => {
  let component: CollectionAppAccessComponent;
  let fixture: ComponentFixture<CollectionAppAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionAppAccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionAppAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
