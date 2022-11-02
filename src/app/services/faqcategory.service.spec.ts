import { TestBed } from '@angular/core/testing';

import { FaqcategoryService } from './faqcategory.service';

describe('FaqcategoryService', () => {
  let service: FaqcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
