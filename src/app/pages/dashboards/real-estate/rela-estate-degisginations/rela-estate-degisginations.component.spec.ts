import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaEstateDegisginationsComponent } from './rela-estate-degisginations.component';

describe('RelaEstateDegisginationsComponent', () => {
  let component: RelaEstateDegisginationsComponent;
  let fixture: ComponentFixture<RelaEstateDegisginationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelaEstateDegisginationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelaEstateDegisginationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
