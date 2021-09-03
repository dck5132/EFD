import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionMemoryService {

  mapList: string[] = [
    'Interchange',
    'Woods',
    'Customs',
    'Shoreline',
    'The Lab',
    'Factory',
    'Reserve'
  ];

  selectedMap: string = '';

  constructor() { }

  public modifyMapList(map: string) {
    if (this.mapList.indexOf(map) !== -1) {
      this.mapList = this.mapList.filter(ml => ml !== map);
    } else {
      this.mapList.push(map);
    }
    // console.log(this.mapList);
  }

  public selectMap() {
    let returnValue = this.mapList[
      Math.floor(Math.random() * this.mapList.length)
    ];
    this.selectedMap = returnValue;
  }

}
