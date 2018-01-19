import { TestBed, inject } from '@angular/core/testing';

import { CalculoService } from './calculo.service';

describe('CalculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculoService]
    });
  });

  it('should be created', inject([CalculoService], (service: CalculoService) => {
    expect(service).toBeTruthy();
  }));
});
