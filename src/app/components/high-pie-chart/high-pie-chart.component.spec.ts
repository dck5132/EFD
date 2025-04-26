import { ComponentFixture, TestBed } from '@angular/core/testing';
// Highcharts
import { HighchartsChartModule } from 'highcharts-angular';
// Components
import { HighPieChartComponent } from './high-pie-chart.component';
describe('HighPieChartComponent', () => {
  let component: HighPieChartComponent;
  let fixture: ComponentFixture<HighPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighchartsChartModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
