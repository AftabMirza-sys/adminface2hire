import { TestBed } from '@angular/core/testing';

import { SkilldataService } from './skilldata.service';

describe('SkilldataService', () => {
  let service: SkilldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkilldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
