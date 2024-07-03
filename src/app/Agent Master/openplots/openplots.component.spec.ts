import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenplotsComponent } from './openplots.component';

describe('OpenplotsComponent', () => {
  let component: OpenplotsComponent;
  let fixture: ComponentFixture<OpenplotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenplotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenplotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
