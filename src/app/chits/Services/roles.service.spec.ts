/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { TestBed } from '@angular/core/testing';

import { RolesService } from './roles.service';

describe('RolesService', () => {
  let service: RolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
