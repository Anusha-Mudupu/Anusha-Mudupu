import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialSpaceLeadsComponent } from './comercial-space-leads.component';

describe('ComercialSpaceLeadsComponent', () => {
  let component: ComercialSpaceLeadsComponent;
  let fixture: ComponentFixture<ComercialSpaceLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComercialSpaceLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComercialSpaceLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
