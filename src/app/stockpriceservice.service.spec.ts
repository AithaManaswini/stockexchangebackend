import { TestBed } from '@angular/core/testing';

import { StockpriceserviceService } from './stockpriceservice.service';

describe('StockpriceserviceService', () => {
  let service: StockpriceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockpriceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
