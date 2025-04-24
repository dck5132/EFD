import { Component, ElementRef, OnInit, signal, viewChild, ViewEncapsulation } from '@angular/core';

import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

// Constants
import { ChartMaps } from 'src/app/constants/chart.constants';
// Services
import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
    selector: 'app-high-pie-chart',
    imports: [HighchartsChartModule],
    templateUrl: './high-pie-chart.component.html',
    styleUrls: ['./high-pie-chart.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HighPieChartComponent implements OnInit {
  // New way of output
  // whenAvailableMapsChanged = output<string[]>();
  // Older way of output
  // @Output() whenAvailableMapsChanged = new EventEmitter<string[]>();

  // Highcharts module
  Highcharts: typeof Highcharts = Highcharts;
  // viewchild for chart
  chart = viewChild.required<ElementRef>(ElementRef);
  // older way of viewchild
  // @ViewChild('chart') chart: ElementRef;

  // Signal for chart options
  chartOptions = signal<Highcharts.Options>({});
  // Signal used to do callback function
  chartCallback = signal<Highcharts.ChartCallbackFunction>(function (chart) {
    return chart;
  });
  updateFlag = signal(false);

  availableMaps = signal<string[]>([]);

  constructor(
    private sessionMemoryService:SessionMemoryService,
  ) {}

  ngOnInit(): void {
    this.generatePieChartConfiguration();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legendClicked(event: any): void {
    const targetMap: string = event.legendItem.name;
    this.sessionMemoryService.modifyAvailableMaps(targetMap);
  }

  generatePieChartConfiguration(): void {
    // Create Chart
    this.chartOptions.set({
      chart: {
        plotShadow: false,
        backgroundColor: 'black',
        style: {
          fontFamily: 'Bender, sans-serif',
          color: 'white'
        }
      },
      title: {
        text: 'Maps In Tarkov',
        margin: 25,
        style: {
          color: 'white'
        }
      },
      legend: {
        useHTML: true,
        padding: 20,
        margin: 25,
        title: {
          text:
            '<div class="d-flex align-items-center"><div class="legend fw-bold">Please select maps you wish to ignore:</div></div>'
        },
        events: {
          itemClick: this.legendClicked.bind(this)
        },
        itemStyle: {
          color: 'white',
          fontSize: '14px'
        },
        itemHoverStyle: {
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold'
        }
      },
      tooltip: {
        pointFormat: ''
      },
      plotOptions: {
        pie: {
          slicedOffset: 20,
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [
        {
          type: 'pie',
          name: 'Maps',
          data: ChartMaps,
          events: {
            click: () => {return false} 
          }
        }
      ]
    });
  }
}
