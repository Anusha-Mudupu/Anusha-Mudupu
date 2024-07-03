import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPlotsCreateLeadComponent } from './open-plots-create-lead.component';

describe('OpenPlotsCreateLeadComponent', () => {
  let component: OpenPlotsCreateLeadComponent;
  let fixture: ComponentFixture<OpenPlotsCreateLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPlotsCreateLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenPlotsCreateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
