import { ComponentFixture, TestBed } from '@angular/core/testing';

// Angular Testing 
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
// import { MatButtonHarness } from '@angular/material/button/testing';
// Components
import { DecisionMakerComponent } from './decision-maker.component';

describe('DecisionMakerComponent', () => {
  let component: DecisionMakerComponent;
  let fixture: ComponentFixture<DecisionMakerComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionMakerComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    // const dialogCloseButton = await loader.getHarness(MatButtonHarness.with({ text: component.buttonText()}));
    // expect(await dialogCloseButton.isDisabled()).toBe(false);
    // await dialogCloseButton.click();
});
