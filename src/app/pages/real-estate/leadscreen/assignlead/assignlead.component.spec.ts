import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignleadComponent } from './assignlead.component';

describe('AssignleadComponent', () => {
  let component: AssignleadComponent;
  let fixture: ComponentFixture<AssignleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignleadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
