import { Injectable } from '@angular/core';

import { MapData } from '../interfaces/map-data';
import { EmitterService } from './emitter.service';

@Injectable({
  providedIn: 'root'
})
export class SessionMemoryService {

  mapList: MapData[] = [
    {
      name: 'Interchange',
      y: 14.285,
      color: '#AF00FF',
    },
    {
      name: 'Woods',
      y: 14.285,
      color: '#0025FF'
    },
    {
      name: 'Customs',
      y: 14.285,
      color: '#FF0000'
    },
    {
      name: 'Shoreline',
      y: 14.285,
      color: '#039000'
    },
    {
      name: 'The Lab',
      y: 14.285,
      color: '#2BC5F1'
    },
    {
      name: 'Factory',
      y: 14.285,
      color: '#FBB9FA'
    },
    {
      name: 'Reserve',
      y: 14.285,
      color: '#FF9100'
    }
  ];

  availableMaps: string[] = [];

  selectedMap: string = '';

  selectButtonDisabled = false;

  constructor(public emitterService: EmitterService) {
    // populate availableMaps
    this.mapList.forEach((map) => {
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

}
