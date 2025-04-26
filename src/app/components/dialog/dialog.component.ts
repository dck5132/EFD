import { Component, computed, signal, ViewEncapsulation } from '@angular/core';
// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
// Constants
import { PossibleRaidTimesToDisplay } from 'src/app/constants/dropdown.constants';
// Services
import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
    selector: 'app-dialog',
    imports: [MatDialogModule],
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {
  // Determines which map and time to display on the dialog
  displayedMap = computed(() => this.determineDisplayedMap());
  displayedTime = computed(() => this.determineDisplayedTime());
  // Display text for all other maps
  readonly normalTitleText = signal(`Selected map and time: ${this.displayedMap()} at ${this.displayedTime()}!`).asReadonly();
  // Display text for 'The Lab' map
  readonly labTitleText = signal(`Selected map: ${this.displayedMap()}!`).asReadonly();
  // Computed signal to determine which title text to display based on the selected map
  titleText = computed(() => this.displayedMap() === 'The Lab' ? this.labTitleText() : this.normalTitleText());
  // Extra content text for 'The Lab' map
  readonly labContentText = signal(`${this.displayedMap()} doesn't allow you to deploy at a specific time of day`).asReadonly();
  // Button text for closing the dialog
  readonly buttonText = signal('Deploying!').asReadonly();

  constructor(public sessionMemoryService: SessionMemoryService) {}

  determineDisplayedMap(): string {
    const selectedMapIndex = Math.floor(Math.random() * this.sessionMemoryService.filteredDownMaps().length);
    const selectedMap = this.sessionMemoryService.filteredDownMaps()[selectedMapIndex];
    return selectedMap;
  }

  protected determineDisplayedTime(): string {
    // If user has not selected a time - pick nighttime or daytime for them
    if (this.sessionMemoryService.chosenTime().match('Anytime')) {
      // Limit possible indexes to 1-2 to ensure nighttime or daytime is selected
      const selectedTimeIndex = Math.floor(Math.random() * PossibleRaidTimesToDisplay.length);
      const selectedTime = PossibleRaidTimesToDisplay[selectedTimeIndex];
      return selectedTime;
    }
    // Don't need else here because of how return works - it will never reach this point if the user has selected a time
    return this.sessionMemoryService.chosenTime();
  }
}
