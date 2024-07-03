import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEsateBranchTransferComponent } from './real-esate-branch-transfer.component';

describe('RealEsateBranchTransferComponent', () => {
  let component: RealEsateBranchTransferComponent;
  let fixture: ComponentFixture<RealEsateBranchTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEsateBranchTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEsateBranchTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
