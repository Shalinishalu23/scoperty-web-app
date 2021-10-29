import { TestBed } from '@angular/core/testing';

import { LabWorksService } from './lab-works.service';

describe('LabWorksService', () => {
  let service: LabWorksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabWorksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
