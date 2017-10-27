import { TestBed, inject } from '@angular/core/testing';

import { HackernewApiService } from './hackernew-api.service';

describe('HackernewApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackernewApiService]
    });
  });

  it('should ...', inject([HackernewApiService], (service: HackernewApiService) => {
    expect(service).toBeTruthy();
  }));
});
