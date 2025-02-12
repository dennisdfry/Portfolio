import { TestBed } from '@angular/core/testing';

import { LegalNotizService } from './legal-notiz.service';

describe('LegalNotizService', () => {
  let service: LegalNotizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalNotizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
