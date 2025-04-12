import { Component, ViewEncapsulation } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
// Constants
import { RaidTimes } from 'src/app/constants/dropdown.constants';
// Services
import { SessionMemoryService } from 'src/app/services/session-memory.service';
// Components
import { DialogComponent } from '../dialog/dialog.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { HighPieChartComponent } from '../high-pie-chart/high-pie-chart.component';

@Component({
    selector: 'app-decision-maker',
    imports: [MatButtonModule, DropdownComponent, HighPieChartComponent],
    templateUrl: './decision-maker.component.html',
    styleUrls: ['./decision-maker.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DecisionMakerComponent {

  raidTimes = RaidTimes;
  raidTimesLabel = 'Please select your prefered raid time: ';

  constructor(public sessionMemoryService: SessionMemoryService,
    public dialog: MatDialog
  ) { }

  activate():void {
    this.sessionMemoryService.selectMap();
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

}
