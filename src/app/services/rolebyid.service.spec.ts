import { TestBed } from '@angular/core/testing';

import { RolebyidService } from './rolebyid.service';

describe('RolebyidService', () => {
  let service: RolebyidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolebyidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
