import { TestBed } from '@angular/core/testing';

import { SpacecraftService } from './spacecraft.service';

describe('SpacecraftService', () => {
  let service: SpacecraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacecraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
