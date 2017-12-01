import { TestBed, inject } from '@angular/core/testing';

import { ToastyServiceInt } from './toasty.service';

describe('ToastyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastyServiceInt]
    });
  });

  it('should be created', inject([ToastyServiceInt], (service: ToastyServiceInt) => {
    expect(service).toBeTruthy();
  }));
});
