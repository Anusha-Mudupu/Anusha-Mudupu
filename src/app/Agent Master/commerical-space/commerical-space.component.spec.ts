import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommericalSpaceComponent } from './commerical-space.component';

describe('CommericalSpaceComponent', () => {
  let component: CommericalSpaceComponent;
  let fixture: ComponentFixture<CommericalSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommericalSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommericalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
