import { TestBed } from '@angular/core/testing';

import { StockexchangeserviceService } from './stockexchangeservice.service';

describe('StockexchangeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockexchangeserviceService = TestBed.get(StockexchangeserviceService);
    expect(service).toBeTruthy();
  });
});
