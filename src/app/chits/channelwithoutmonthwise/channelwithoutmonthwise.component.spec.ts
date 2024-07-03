/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelwithoutmonthwiseComponent } from './channelwithoutmonthwise.component';

describe('ChannelwithoutmonthwiseComponent', () => {
  let component: ChannelwithoutmonthwiseComponent;
  let fixture: ComponentFixture<ChannelwithoutmonthwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelwithoutmonthwiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChannelwithoutmonthwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
