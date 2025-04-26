import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
// Components
import { DropdownComponent } from './dropdown.component';
// Constants
import { AllRaidTimeChoices } from 'src/app/constants/dropdown.constants';
// Services
import { SessionMemoryService } from 'src/app/services/session-memory.service';
// Testing Utilities
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatFormFieldHarness } from '@angular/material/form-field/testing';
import { MatSelectHarness } from '@angular/material/select/testing';
import { HarnessLoader } from '@angular/cdk/testing';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let loader: HarnessLoader;
  let sessionMemoryService: SessionMemoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    sessionMemoryService = TestBed.inject(SessionMemoryService);

    // Set required inputs for the component
    fixture.componentRef.setInput('label', 'Please select your prefered raid time: ');
    fixture.componentRef.setInput('options', AllRaidTimeChoices );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it ('should display the label provided to the label input', async() => {
    const labelText = (await loader.getHarness(MatFormFieldHarness)).getLabel();
    expect(await labelText).toEqual(component.label().trim());
  });

  it ('should modify the sessionMemoryService chosenTime when an option is clicked', async() => {
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    const options = await select.getOptions();
    await options[1].click();
    expect(sessionMemoryService.chosenTime()).toEqual(await select.getValueText());
  });

});
