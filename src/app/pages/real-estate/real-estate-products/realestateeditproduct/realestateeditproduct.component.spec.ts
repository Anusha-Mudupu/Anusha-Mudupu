import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateeditproductComponent } from './realestateeditproduct.component';

describe('RealestateeditproductComponent', () => {
  let component: RealestateeditproductComponent;
  let fixture: ComponentFixture<RealestateeditproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealestateeditproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealestateeditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
