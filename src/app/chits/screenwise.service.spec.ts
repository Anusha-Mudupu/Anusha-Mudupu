import { TestBed } from '@angular/core/testing';

import { ScreenwiseService } from './screenwise.service';

describe('ScreenwiseService', () => {
  let service: ScreenwiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenwiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
