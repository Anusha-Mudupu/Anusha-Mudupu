import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupgridComponent } from './followupgrid.component';

describe('FollowupgridComponent', () => {
  let component: FollowupgridComponent;
  let fixture: ComponentFixture<FollowupgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowupgridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowupgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
