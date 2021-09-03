import { Component, Inject, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import * as Highcharts from 'highcharts';

import { SessionMemoryService } from 'src/app/services/session-memory.service';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-high-pie-chart',
  templateUrl: './high-pie-chart.component.html',
  styleUrls: ['./high-pie-chart.component.scss']
})
export class HighPieChartComponent implements OnInit, OnChanges {

  initialized = false;

  data = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor(
    private sessionMemoryService:SessionMemoryService
    ) {}

  ngOnInit() {
    this.generatePieChartConfiguration();
    this.initialized = true;
  }

  ngOnChanges() {
    if (this.initialized) {
      this.generatePieChartConfiguration();
    }
  }

  legendClicked(event: any) {
    // console.log(event);
    let targetMap: string = event.target.name;
    this.sessionMemoryService.modifyMapList(targetMap);
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
            '<div style="font-size: 14px; width: 35vw; text-align: center;">Please select maps you wish to ignore:</div>'
        },
        itemStyle: {
          color: 'white',
          fontSize: '14px'
        }
      },
      tooltip: {
        pointFormat: ''
      },
      plotOptions: {
        pie: {
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
          data: [
            {
              name: 'Interchange',
              y: 14.285,
              color: 'purple'
            },
            {
              name: 'Woods',
              y: 14.285,
              color: 'grey'
            },
            {
              name: 'Customs',
              y: 14.285,
              color: 'red'
            },
            {
              name: 'Shoreline',
              y: 14.285,
              color: 'green'
            },
            {
              name: 'The Lab',
              y: 14.285,
              color: 'teal'
            },
            {
              name: 'Factory',
              y: 14.285,
              color: 'pink'
            },
            {
              name: 'Reserve',
              y: 14.285,
              color: 'orange'
            }
          ],
          events: {
            legendItemClick: this.legendClicked.bind(this)
          }
        }
      ]
    };
    // console.log(this.chartOptions);
  }
}
