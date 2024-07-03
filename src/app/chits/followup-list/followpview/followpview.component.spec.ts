import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowpviewComponent } from './followpview.component';

describe('FollowpviewComponent', () => {
  let component: FollowpviewComponent;
  let fixture: ComponentFixture<FollowpviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowpviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowpviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
