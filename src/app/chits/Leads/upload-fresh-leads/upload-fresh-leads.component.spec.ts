import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFreshLeadsComponent } from './upload-fresh-leads.component';

describe('UploadFreshLeadsComponent', () => {
  let component: UploadFreshLeadsComponent;
  let fixture: ComponentFixture<UploadFreshLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadFreshLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadFreshLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
