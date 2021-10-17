import { Injectable } from '@angular/core';

import { Maps } from '../constants/chart.constants';
import { RaidTimes } from '../constants/dropdown.constants';
import { MapData } from '../interfaces/map-data';

import { EmitterService } from './emitter.service';

@Injectable({
  providedIn: 'root'
})
export class SessionMemoryService {

  mapList = Maps

  availableMaps: string[] = [];

  selectedMap: string = '';
  selectedTime: string = '';
  displayedTime: string = '';

  selectButtonDisabled = false;

  constructor(public emitterService: EmitterService) {
    // populate availableMaps
    this.mapList.forEach((map: MapData) => {
      this.availableMaps.push(map.name);
    });
   }

  public modifyAvailableMaps(map: string) {
    if (this.availableMaps.indexOf(map) !== -1) {
      this.availableMaps = this.availableMaps.filter(ml => ml !== map);
    } else {
      this.availableMaps.push(map);
    }
    // check length of available maps so that there is more then 1 map
    if (this.availableMaps.length > 1) {
      this.selectButtonDisabled = false;
    }
    else {
      this.selectButtonDisabled = true;
    }
  }

  public selectMap(clear: boolean = false) {
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

    for (let i in this.mapList) {
      if (this.mapList[i].name === this.selectedMap) {
        this.mapList[i].sliced = true;
      }
      else {
        this.mapList[i].sliced = false;
      }
    }

    this.emitterService.onMapSelected(this.selectedMap);
  }

  public checkTime() {
    if (this.selectedTime.match(/Anytime/) && this.selectedMap) {
      this.displayedTime = RaidTimes[
        Math.floor(Math.random() * 2)
      ];
    }
  }

}
