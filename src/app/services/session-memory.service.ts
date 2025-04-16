import { Injectable } from '@angular/core';

import { Maps } from '../constants/chart.constants';
import { RaidTimes } from '../constants/dropdown.constants';
import { MapData } from '../interfaces/map-data';

@Injectable({
  providedIn: 'root'
})
export class SessionMemoryService {

  mapList = Maps;

  availableMaps: string[] = [];

  selectedMap = '';

  selectedTime = '';
  displayTime = true;
  displayedTime = '';

  selectButtonDisabled = false;

  constructor() {
    // populate available maps
    this.mapList.forEach((map: MapData) => {
      this.availableMaps.push(map.name);
    });
   }

  public modifyAvailableMaps(map: string): void {
    if (this.availableMaps.indexOf(map) !== -1) {
      this.availableMaps = this.availableMaps.filter(ml => ml !== map);
    } else {
      this.availableMaps.push(map);
    }
    // check length of available maps so that there is more then 1 map
    this.modifyAvailableTimes();
  }

  public modifyAvailableTimes(): void {
    if (this.availableMaps.length < 1) {
      this.selectButtonDisabled = true;
    }
    else if (this.availableMaps.length === 1 && (this.availableMaps.indexOf('The Lab') !== -1 || !this.selectedTime.match(/Anytime/))) {
      this.selectButtonDisabled = true;
    }
    else {
      this.selectButtonDisabled = false;
    }
  }

  public selectMap(clear = false): void {
    let returnValue: string;

    if (clear) {
      returnValue = '';
    }
    else {
      returnValue = this.availableMaps[
        Math.floor(Math.random() * this.availableMaps.length)
      ];
    }

    this.selectedMap = returnValue;

    // Handle special condition in The Lab where you can't choose a time
    if (this.selectedMap.match(/The Lab/)) {
      this.displayTime = false;
    }
    else {
      this.displayTime = true;
    }

    this.mapList.forEach((map: MapData) => {
      if (map.name === this.selectedMap && this.availableMaps.length > 1) {
        map.sliced = true;
      }
      else {
        map.sliced = false;
      }
    });

    if (!clear) {
      if (this.selectedTime.match(/Anytime/) && this.displayTime) {
        this.displayedTime = RaidTimes[
          1 + Math.floor(Math.random() * 2)
        ];
      }
      else {
        console.log(this.displayedTime);
        this.displayedTime = this.selectedTime;
      }
    }
  }

}
