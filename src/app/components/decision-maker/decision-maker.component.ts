import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RaidTimes } from 'src/app/constants/dropdown.constants';
import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
  selector: 'app-decision-maker',
  templateUrl: './decision-maker.component.html',
  styleUrls: ['./decision-maker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DecisionMakerComponent implements OnInit {

  raidTimes = RaidTimes;
  raidTimesLabel = 'Please select your prefered raid time: ';

  constructor(public sessionMemoryService: SessionMemoryService) { }

  ngOnInit(): void {
  }

}
