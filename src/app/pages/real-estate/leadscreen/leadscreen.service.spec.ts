import { TestBed } from '@angular/core/testing';

import { LeadscreenService } from './leadscreen.service';

describe('LeadscreenService', () => {
  let service: LeadscreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadscreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
