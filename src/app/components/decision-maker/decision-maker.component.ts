import { Component, computed, signal, ViewEncapsulation } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
// Constants
import { AllRaidTimeChoices } from 'src/app/constants/dropdown.constants';
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
    encapsulation: ViewEncapsulation.None,
})
export class DecisionMakerComponent {

  readonly selectRaidTimesLabel = signal('Select a raid time (optional):').asReadonly();
  readonly buttonText = signal('Select a map and time').asReadonly();

  selectRaidTimes = signal<string[]>(AllRaidTimeChoices);
  selectButtonDisabled = computed(() => this.sessionMemoryService.filteredDownMaps().length <= 1 ? true : false);
  // Example of passing function to computed signal property
  // selectButtonDisabled = computed(() => this.checkButtonDisabled());

  constructor(
    public sessionMemoryService: SessionMemoryService,
    public dialog: MatDialog
  ) { }

  protected openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}
