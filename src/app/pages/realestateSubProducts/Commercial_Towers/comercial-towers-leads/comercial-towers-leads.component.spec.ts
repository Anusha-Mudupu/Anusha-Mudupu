import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialTowersLeadsComponent } from './comercial-towers-leads.component';

describe('ComercialTowersLeadsComponent', () => {
  let component: ComercialTowersLeadsComponent;
  let fixture: ComponentFixture<ComercialTowersLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComercialTowersLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComercialTowersLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
