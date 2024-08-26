import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { RaidTimes } from 'src/app/constants/dropdown.constants';
import { SessionMemoryService } from 'src/app/services/session-memory.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-decision-maker',
  templateUrl: './decision-maker.component.html',
  styleUrls: ['./decision-maker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DecisionMakerComponent implements OnInit {

  raidTimes = RaidTimes;
  raidTimesLabel = 'Please select your prefered raid time: ';

  constructor(public sessionMemoryService: SessionMemoryService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  activate() {
    this.sessionMemoryService.selectMap();
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
  }

}
