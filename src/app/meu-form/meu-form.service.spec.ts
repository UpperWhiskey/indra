import { TestBed, inject } from '@angular/core/testing';

import { MeuFormService } from './meu-form.service';

describe('MeuFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeuFormService]
    });
  });

  it('should be created', inject([MeuFormService], (service: MeuFormService) => {
    expect(service).toBeTruthy();
  }));
});
