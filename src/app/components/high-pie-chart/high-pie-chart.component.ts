import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import { Observable, Subscription } from 'rxjs';
// Interfaces
import { MapData } from 'src/app/interfaces/map-data';
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

  @ViewChild('chart')
  chart$!: Observable<Highcharts.Chart>;

  data: MapData[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { 
    return chart;
  }
  updateFlag = false;

  mapSelectionSubscription!: Subscription;

  constructor(
    private sessionMemoryService:SessionMemoryService,
  ) {}

  ngOnInit(): void {
    this.generatePieChartConfiguration();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legendClicked(event: any): void {
    console.log(event.legendItem.name);
    const targetMap: string = event.legendItem.name;
    this.sessionMemoryService.modifyAvailableMaps(targetMap);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartClicked(event: any): boolean {
    console.log(event);
    return false;
  }

  generatePieChartConfiguration(): void {
    // Create Chart
    this.chartOptions = {
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
          data: this.sessionMemoryService.mapList,
          events: {
            click: this.chartClicked.bind(this)
          }
        }
      ]
    };
  }
}
