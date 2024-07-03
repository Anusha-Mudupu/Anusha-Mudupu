import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentOnboardingComponent } from './agent-onboarding.component';

describe('AgentOnboardingComponent', () => {
  let component: AgentOnboardingComponent;
  let fixture: ComponentFixture<AgentOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentOnboardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
