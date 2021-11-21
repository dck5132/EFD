import { Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import * as Highcharts from 'highcharts';

import { Subscription } from 'rxjs';

import { MapData } from 'src/app/interfaces/map-data';
import { EmitterService } from 'src/app/services/emitter.service';

import { SessionMemoryService } from 'src/app/services/session-memory.service';

@Component({
  selector: 'app-high-pie-chart',
  templateUrl: './high-pie-chart.component.html',
  styleUrls: ['./high-pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HighPieChartComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('chart')
  chart!: ElementRef;

  initialized = false;

  data:MapData[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { 
    return chart;
  }
  updateFlag = false;

  mapSelectionSubscription!: Subscription;

  constructor(
    private sessionMemoryService:SessionMemoryService,
    public emitterService: EmitterService
    ) {}

  ngOnInit() {
    this.generatePieChartConfiguration();
    this.initialized = true;
    this.mapSelectionSubscription = this.emitterService.mapSelected$.subscribe((selectedMap: string) => {
      if (this.chartOptions.series !== undefined) {
        this.chartOptions.series[0] = {
          type: 'pie',
          name: 'Maps',
          colorByPoint: true,
          data: this.sessionMemoryService.mapList,
          events: {
            legendItemClick: this.legendClicked.bind(this)
          }
        }
        this.updateFlag = true;
      }
      else {
        console.log('Typescript was right - who knew?');
      }
    });
  }

  ngOnChanges() {
    if (this.initialized) {
      this.generatePieChartConfiguration();
    }
  }

  legendClicked(event: any) {
    // console.log(event);
    let targetMap: string = event.target.name;
    this.sessionMemoryService.modifyAvailableMaps(targetMap);
  }

  chartClicked (event: any) {
    return false;
  }

  generatePieChartConfiguration() {
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
            '<div class="d-flex justify-content-center align-items-center"><div class="legend text-center legend-width fw-bold">Please select maps you wish to ignore:</div></div>'
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
          point: {
            events: {
              legendItemClick: this.legendClicked.bind(this)
            }
          },
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
          colorByPoint: true,
          data: this.sessionMemoryService.mapList,
          events: {
            legendItemClick: this.legendClicked.bind(this),
            click: this.chartClicked.bind(this)
          }
        }
      ]
    };
    // console.log(this.chartOptions);
  }

  ngOnDestroy() {
    this.emitterService.unsubscribe(this.mapSelectionSubscription);
  }
}
