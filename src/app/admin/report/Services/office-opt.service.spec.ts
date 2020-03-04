import { TestBed } from '@angular/core/testing';

import { OfficeOptService } from './office-opt.service';

describe('OfficeOptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficeOptService = TestBed.get(OfficeOptService);
    expect(service).toBeTruthy();
  });
});
