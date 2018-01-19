import { TestBed, inject } from '@angular/core/testing';

import { IrService } from './ir.service';

describe('IrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IrService]
    });
  });

  it('should be created', inject([IrService], (service: IrService) => {
    expect(service).toBeTruthy();
  }));
});
