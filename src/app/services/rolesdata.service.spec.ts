import { TestBed } from '@angular/core/testing';

import { RolesdataService } from './rolesdata.service';

describe('RolesdataService', () => {
  let service: RolesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
