import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductconfigComponent } from './productconfig.component';

describe('ProductconfigComponent', () => {
  let component: ProductconfigComponent;
  let fixture: ComponentFixture<ProductconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductconfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
