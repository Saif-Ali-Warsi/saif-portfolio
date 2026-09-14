import { TestBed } from '@angular/core/testing';

import { VisitorStatsService } from './visitor-stats.service';

describe('VisitorStatsService', () => {
  let service: VisitorStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
