import { Injectable, signal } from '@angular/core';

import { AllMapNames } from '../constants/chart.constants';
import { RaidTimes } from '../constants/dropdown.constants';

@Injectable({
  providedIn: 'root'
})
export class SessionMemoryService {

  readonly AllMapNames = signal<string[]>(AllMapNames);
  
  filteredDownMaps = signal<string[]>(this.AllMapNames());

  selectedMap = signal('');

  selectedTime = signal('');
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
    this.selectedMap.set(selectedMap);
  }

  protected determineDisplayedTime(): void {
    const selectedTimeIndex = Math.floor(Math.random() * RaidTimes.length);
    const selectedTime = RaidTimes[selectedTimeIndex];
    this.displayedTime.set(selectedTime);
  }

}
