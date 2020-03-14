import { TestBed } from '@angular/core/testing';

import { CompanyserviceService } from './companyservice.service';

describe('CompanyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyserviceService = TestBed.get(CompanyserviceService);
    expect(service).toBeTruthy();
  });
});
