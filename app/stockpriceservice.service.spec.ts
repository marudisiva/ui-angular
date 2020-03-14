import { TestBed } from '@angular/core/testing';

import { StockpriceserviceService } from './stockpriceservice.service';

describe('StockpriceserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockpriceserviceService = TestBed.get(StockpriceserviceService);
    expect(service).toBeTruthy();
  });
});
