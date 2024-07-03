/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { TestBed } from '@angular/core/testing';

import { CampaignService } from './campaign.service';

describe('CampaignService', () => {
  let service: CampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
