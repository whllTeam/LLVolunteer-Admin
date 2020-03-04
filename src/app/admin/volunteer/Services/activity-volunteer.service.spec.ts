import { TestBed } from '@angular/core/testing';

import { ActivityVolunteerService } from './activity-volunteer.service';

describe('ActivityVolunteerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityVolunteerService = TestBed.get(ActivityVolunteerService);
    expect(service).toBeTruthy();
  });
});
