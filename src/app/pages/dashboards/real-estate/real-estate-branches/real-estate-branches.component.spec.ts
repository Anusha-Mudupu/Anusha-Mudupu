import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateBranchesComponent } from './real-estate-branches.component';

describe('RealEstateBranchesComponent', () => {
  let component: RealEstateBranchesComponent;
  let fixture: ComponentFixture<RealEstateBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateBranchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
