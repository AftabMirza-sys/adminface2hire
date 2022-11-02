import { TestBed } from '@angular/core/testing';

import { InterestdataService } from './interestdata.service';

describe('InterestdataService', () => {
  let service: InterestdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
