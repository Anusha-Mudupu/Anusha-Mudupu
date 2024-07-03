import { TestBed } from '@angular/core/testing';

import { MenuitemsService } from './menuitems.service';

describe('MenuitemsService', () => {
  let service: MenuitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
