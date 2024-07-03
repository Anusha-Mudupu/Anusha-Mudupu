import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeadComponent } from './update-lead.component';

describe('UpdateLeadComponent', () => {
  let component: UpdateLeadComponent;
  let fixture: ComponentFixture<UpdateLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
