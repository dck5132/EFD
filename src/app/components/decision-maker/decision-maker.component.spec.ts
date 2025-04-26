import { ComponentFixture, TestBed } from '@angular/core/testing';
// Angular Testing 
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
// Components
import { DecisionMakerComponent } from './decision-maker.component';
// Services
import { SessionMemoryService } from 'src/app/services/session-memory.service';

describe('DecisionMakerComponent', () => {
  let component: DecisionMakerComponent;
  let fixture: ComponentFixture<DecisionMakerComponent>;
  let loader: HarnessLoader;
  
  let sessionMemoryService: SessionMemoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionMakerComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    sessionMemoryService = TestBed.inject(SessionMemoryService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe ('Select map and time button', () => {
    it ('should display the button with the same text as buttonText', async() => {
      const openDialogButton = await loader.getHarness(MatButtonHarness.with({ text: component.buttonText()}));
      expect (await openDialogButton.getText()).toEqual(component.buttonText());
    })
    it ('should not be disabled when more then one map is available', async() => {
      sessionMemoryService.filteredDownMaps.set(['The Lab', 'Woods']);
      const openDialogButton = await loader.getHarness(MatButtonHarness.with({ text: component.buttonText()}));
      expect(await openDialogButton.isDisabled()).toBe(false);
    });
    it ('should be disabled when only one map is available', async() => {
      sessionMemoryService.filteredDownMaps.set(['The Lab']);
      const openDialogButton = await loader.getHarness(MatButtonHarness.with({ text: component.buttonText()}));
      expect(await openDialogButton.isDisabled()).toBe(true);
    });
  });

});
