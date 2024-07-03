import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingbtwdatesunclearedComponent } from './bookingbtwdatesuncleared.component';

describe('BookingbtwdatesunclearedComponent', () => {
  let component: BookingbtwdatesunclearedComponent;
  let fixture: ComponentFixture<BookingbtwdatesunclearedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingbtwdatesunclearedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingbtwdatesunclearedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
