import { Injectable, signal } from '@angular/core';

import { AllMapNames } from '../constants/chart.constants';
import { RaidTimes } from '../constants/dropdown.constants';

@Injectable({
  providedIn: 'root'
})
export class SessionMemoryService {

  readonly AllMapNames = signal<string[]>(AllMapNames);
  
  filteredDownMaps = signal<string[]>(this.AllMapNames());
  // Map displayed on dialog
  displayedMap = signal('');
  // Time chosen on dropdown
  chosenTime = signal(RaidTimes[0]);
  // Time displayed on dialog
  displayedTime = signal('');

  selectButtonDisabled = signal(false);

  public modifyAvailableMaps(selectedMap: string): void {
    if (this.filteredDownMaps().indexOf(selectedMap) !== -1) {
      this.filteredDownMaps.update((maps) => maps.filter(currentMap => currentMap !== selectedMap));
    }
    else {
      this.filteredDownMaps.update((maps) => [...maps, selectedMap]);
    }
  }

  public determineDisplayedMapAndTime(): void {
    this.determineDisplayedMap();
    this.determineDisplayedTime();
  }

  protected determineDisplayedMap(): void {
    const selectedMapIndex = Math.floor(Math.random() * this.filteredDownMaps().length);
    const selectedMap = this.filteredDownMaps()[selectedMapIndex];
    this.displayedMap.set(selectedMap);
  }

  protected determineDisplayedTime(): void {
    // If user has not selected a time - pick nighttime or daytime for them
    if (this.chosenTime().match('Anytime')) {
      // Limit possible indexes to 1-2 to ensure nighttime or daytime is selected
      const minRange = 1;
      const possibleIndexes = (RaidTimes.length - minRange) + minRange;
      const selectedTimeIndex = Math.floor(Math.random() * possibleIndexes);
      const selectedTime = RaidTimes[selectedTimeIndex];
      this.displayedTime.set(selectedTime);
    }
    // If user has selected a specific time, use that time
    else {
      this.displayedTime.set(this.chosenTime());
    }
  }

}
