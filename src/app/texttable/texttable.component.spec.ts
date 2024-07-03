import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttableComponent } from './texttable.component';

describe('TexttableComponent', () => {
  let component: TexttableComponent;
  let fixture: ComponentFixture<TexttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexttableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
