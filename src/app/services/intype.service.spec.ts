import { TestBed } from '@angular/core/testing';

import { IntypeService } from './intype.service';

describe('IntypeService', () => {
  let service: IntypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
