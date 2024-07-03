import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateUpdatebranchComponent } from './real-estate-updatebranch.component';

describe('RealEstateUpdatebranchComponent', () => {
  let component: RealEstateUpdatebranchComponent;
  let fixture: ComponentFixture<RealEstateUpdatebranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateUpdatebranchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateUpdatebranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
