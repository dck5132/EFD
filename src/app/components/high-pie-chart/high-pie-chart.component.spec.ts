import { ComponentFixture, TestBed } from '@angular/core/testing';
// Highcharts
import { HighchartsChartModule } from 'highcharts-angular';
// Components
import { HighPieChartComponent } from './high-pie-chart.component';
// Constants
import { ChartMaps } from 'src/app/constants/chart.constants';

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
  it('should render the chart', () => {
    const chartElement = fixture.nativeElement.querySelector('highcharts-chart');
    expect(chartElement).toBeTruthy();
  });

  it('should the chart options definded', () => {
    expect(component.chartOptions).toBeDefined();
  });

  it('should have data matching the ChartMaps constant', () => {
    expect(component.chartOptions().series).toBeDefined();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((component.chartOptions().series![0] as any).data).toEqual(ChartMaps);
  });
});
