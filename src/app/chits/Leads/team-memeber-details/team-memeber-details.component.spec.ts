/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemeberDetailsComponent } from './team-memeber-details.component';

describe('TeamMemeberDetailsComponent', () => {
  let component: TeamMemeberDetailsComponent;
  let fixture: ComponentFixture<TeamMemeberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMemeberDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamMemeberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
