import { TestBed } from '@angular/core/testing';

import { MainExpandService } from './main-expand.service';

describe('MainExpandService', () => {
  let service: MainExpandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainExpandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
