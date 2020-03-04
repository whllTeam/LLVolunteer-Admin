import { TestBed } from '@angular/core/testing';

import { DormitoryService } from './dormitory.service';

describe('DormitoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DormitoryService = TestBed.get(DormitoryService);
    expect(service).toBeTruthy();
  });
});
