import { Component, OnInit } from '@angular/core';
import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
  selector: 'app-decision-maker',
  templateUrl: './decision-maker.component.html',
  styleUrls: ['./decision-maker.component.scss']
})
export class DecisionMakerComponent implements OnInit {

  constructor(public sessionMemoryService: SessionMemoryService) { }

  ngOnInit(): void {
  }

}
