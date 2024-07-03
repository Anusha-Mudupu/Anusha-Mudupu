import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPlotsEditLeadComponent } from './open-plots-edit-lead.component';

describe('OpenPlotsEditLeadComponent', () => {
  let component: OpenPlotsEditLeadComponent;
  let fixture: ComponentFixture<OpenPlotsEditLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPlotsEditLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenPlotsEditLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
