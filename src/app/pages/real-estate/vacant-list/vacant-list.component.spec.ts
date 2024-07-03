import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantListComponent } from './vacant-list.component';

describe('VacantListComponent', () => {
  let component: VacantListComponent;
  let fixture: ComponentFixture<VacantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacantListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
