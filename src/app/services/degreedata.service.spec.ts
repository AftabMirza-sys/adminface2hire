import { TestBed } from '@angular/core/testing';

import { DegreedataService } from './degreedata.service';

describe('DegreedataService', () => {
  let service: DegreedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DegreedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
