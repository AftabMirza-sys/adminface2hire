import { TestBed } from '@angular/core/testing';

import { CategorydataService } from './categorydata.service';

describe('CategorydataService', () => {
  let service: CategorydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
