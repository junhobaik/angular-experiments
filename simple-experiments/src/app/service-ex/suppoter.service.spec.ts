import { TestBed, inject } from '@angular/core/testing';

import { SuppoterService } from './suppoter.service';

describe('SuppoterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuppoterService]
    });
  });

  it('should be created', inject([SuppoterService], (service: SuppoterService) => {
    expect(service).toBeTruthy();
  }));
});
