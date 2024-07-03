import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPlotsLeadsComponent } from './open-plots-leads.component';

describe('OpenPlotsLeadsComponent', () => {
  let component: OpenPlotsLeadsComponent;
  let fixture: ComponentFixture<OpenPlotsLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPlotsLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenPlotsLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
