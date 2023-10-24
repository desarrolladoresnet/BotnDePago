import { TestBed } from '@angular/core/testing';

import { PagarServiceService } from './pagar-service.service';

describe('PagarServiceService', () => {
  let service: PagarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
