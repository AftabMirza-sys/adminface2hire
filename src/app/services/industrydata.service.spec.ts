import { TestBed } from '@angular/core/testing';

import { IndustrydataService } from './industrydata.service';

describe('IndustrydataService', () => {
  let service: IndustrydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustrydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
