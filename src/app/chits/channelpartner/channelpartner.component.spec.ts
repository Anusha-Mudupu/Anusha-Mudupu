/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelpartnerComponent } from './channelpartner.component';

describe('ChannelpartnerComponent', () => {
  let component: ChannelpartnerComponent;
  let fixture: ComponentFixture<ChannelpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelpartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChannelpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
