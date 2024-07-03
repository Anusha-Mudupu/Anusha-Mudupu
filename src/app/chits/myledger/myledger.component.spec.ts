import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyledgerComponent } from './myledger.component';

describe('MyledgerComponent', () => {
  let component: MyledgerComponent;
  let fixture: ComponentFixture<MyledgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyledgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
