/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { TestBed } from '@angular/core/testing';

import { CollectionAppService } from './collection-app.service';

describe('CollectionAppService', () => {
  let service: CollectionAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
