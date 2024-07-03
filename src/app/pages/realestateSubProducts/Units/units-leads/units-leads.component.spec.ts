import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsLeadsComponent } from './units-leads.component';

describe('UnitsLeadsComponent', () => {
  let component: UnitsLeadsComponent;
  let fixture: ComponentFixture<UnitsLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitsLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitsLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
