import { Injectable, signal } from '@angular/core';
// Constants
import { AllMapNames } from '../constants/chart.constants';
import { AllRaidTimeChoices } from '../constants/dropdown.constants';

@Injectable({
  providedIn: 'root'
})
export class SessionMemoryService {

  readonly AllMapNames = signal<string[]>(AllMapNames).asReadonly();
  // State management values
  filteredDownMaps = signal<string[]>(this.AllMapNames());
  chosenTime = signal(AllRaidTimeChoices[0]);

  public modifyAvailableMaps(selectedMap: string): void {
    if (this.filteredDownMaps().indexOf(selectedMap) !== -1) {
      this.filteredDownMaps.update((maps) => maps.filter(currentMap => currentMap !== selectedMap));
    }
    else {
      this.filteredDownMaps.update((maps) => [...maps, selectedMap]);
    }
  }

}
