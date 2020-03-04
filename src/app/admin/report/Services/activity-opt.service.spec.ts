import { TestBed } from '@angular/core/testing';

import { ActivityOptService } from './activity-opt.service';

describe('ActivityOptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityOptService = TestBed.get(ActivityOptService);
    expect(service).toBeTruthy();
  });
});
