import { TestBed } from '@angular/core/testing';

import { DormitoryOptService } from './dormitory-opt.service';

describe('DormitoryOptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DormitoryOptService = TestBed.get(DormitoryOptService);
    expect(service).toBeTruthy();
  });
});
