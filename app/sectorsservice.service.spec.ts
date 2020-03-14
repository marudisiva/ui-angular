import { TestBed } from '@angular/core/testing';

import { SectorsserviceService } from './sectorsservice.service';

describe('SectorsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectorsserviceService = TestBed.get(SectorsserviceService);
    expect(service).toBeTruthy();
  });
});
