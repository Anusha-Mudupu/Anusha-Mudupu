import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditleadComponent } from './editlead.component';

describe('EditleadComponent', () => {
  let component: EditleadComponent;
  let fixture: ComponentFixture<EditleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditleadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
