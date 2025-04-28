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

  describe ('modifying available map', () => {
    it ('should remove a map from the list of available maps if it matches a value in the array', () => {
      service.modifyAvailableMaps('The Lab');
      expect(service.filteredDownMaps()).not.toContain('The Lab');
    });
    // Simulates what happens when a user clicks on a map in the chart legend twice
    it ('should add a map to the list of available maps if it doesn\'t match the value in the array', () => {
      service.modifyAvailableMaps('The Lab');
      service.modifyAvailableMaps('The Lab');
      expect(service.filteredDownMaps()).toContain('The Lab');
    });
  });
});
