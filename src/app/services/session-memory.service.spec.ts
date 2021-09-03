import { TestBed } from '@angular/core/testing';

import { SessionMemoryService } from './session-memory.service';

describe('SessionMemoryService', () => {
  let service: SessionMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
