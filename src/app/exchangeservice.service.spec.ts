import { TestBed } from '@angular/core/testing';

import { ExchangeserviceService } from './exchangeservice.service';

describe('ExchangeserviceService', () => {
  let service: ExchangeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
