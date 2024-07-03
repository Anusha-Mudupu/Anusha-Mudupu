import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLeadsComponent } from './upload-leads.component';

describe('UploadLeadsComponent', () => {
  let component: UploadLeadsComponent;
  let fixture: ComponentFixture<UploadLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
