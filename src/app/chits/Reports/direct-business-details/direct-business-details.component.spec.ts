import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectBusinessDetailsComponent } from './direct-business-details.component';

describe('DirectBusinessDetailsComponent', () => {
  let component: DirectBusinessDetailsComponent;
  let fixture: ComponentFixture<DirectBusinessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectBusinessDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectBusinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
