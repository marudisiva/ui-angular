import { TestBed } from '@angular/core/testing';

import { IpodetailsserviceService } from './ipodetailsservice.service';

describe('IpodetailsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpodetailsserviceService = TestBed.get(IpodetailsserviceService);
    expect(service).toBeTruthy();
  });
});
