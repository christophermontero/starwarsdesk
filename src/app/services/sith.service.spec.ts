import { TestBed } from '@angular/core/testing';

import { SithService } from './sith.service';

describe('SithService', () => {
  let service: SithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
