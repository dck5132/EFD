import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
// Components
import { DialogComponent } from './dialog.component';
import { SessionMemoryService } from 'src/app/services/session-memory.service';
import { PossibleRaidTimesToDisplay } from 'src/app/constants/dropdown.constants';
import { AllMapNames } from 'src/app/constants/chart.constants';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let sessionMemoryService: SessionMemoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: []
    })
    .compileComponents();
    sessionMemoryService = TestBed.inject(SessionMemoryService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe ('Title and content logic', () => {

    it ('should limit the possible maps chosen based on the filteredDownmaps array', () => {
      sessionMemoryService.filteredDownMaps.set(['The Lab', 'Woods', 'Shoreline']);
      fixture.detectChanges();
      expect(sessionMemoryService.filteredDownMaps().includes(component.displayedMap())).toBe(true);
    });
    // Simulates the user not selecting a specific time to deploy
    it ('should limit the possible times based on PossibleRaidTimesToDisplay if the user has not selected a time', () => {
      fixture.detectChanges();
      expect(PossibleRaidTimesToDisplay).toContain(component.displayedTime());
    });
    // Simulates the user selecting a specific time to deploy
    PossibleRaidTimesToDisplay.forEach((time) => {
      it ('should display the chosen time if the user has selected a specific time', () => {
        sessionMemoryService.chosenTime.set(time);
        fixture.detectChanges();
        expect(component.displayedTime()).toEqual(sessionMemoryService.chosenTime());
      });
    });

    it ('should display the title of the computed signal titleText in the dialog', () => {
      fixture.detectChanges();
      const dialogTitleElement = fixture.debugElement.query(By.css('[data-testid="dialog-title"]'));
      expect(dialogTitleElement.nativeElement.textContent).toEqual(component.titleText());
    });
    // Simulates the user selecting a map that is The Lab
    it ('should display the dialog context if the selected map is The Lab', () => {
      sessionMemoryService.filteredDownMaps.set(['The Lab']);
      fixture.detectChanges();
      const dialogContentElement = fixture.debugElement.query(By.css('[data-testid="lab-content"]'));
      expect(dialogContentElement.nativeElement.textContent).toEqual(component.labContentText());
    });
    const allMapsExceptLab = AllMapNames.filter((map) => map !== 'The Lab');
    // Simulates the user selecting a map that is not The Lab
    allMapsExceptLab.forEach((map) => {
      it ('should not display the dialog context if the selected map is not The Lab', () => {
        sessionMemoryService.filteredDownMaps.set([map]);
        fixture.detectChanges();
        const dialogContentElement = fixture.debugElement.query(By.css('[data-testid="lab-content"]'));
        expect(dialogContentElement).toBeNull();
      });
    });
  });

  describe ('Dialog actions', () => {
    it ('should display the buttonText on the confirmation button', () =>  {
      fixture.detectChanges();
      const confirmationButtonElement = fixture.debugElement.query(By.css('[data-testid="confirmation-button"]'));
      const confirmationButtonElmenentText = confirmationButtonElement.nativeElement.textContent.trim();
      expect(confirmationButtonElmenentText).toEqual(component.buttonText());
    });
  });

})
