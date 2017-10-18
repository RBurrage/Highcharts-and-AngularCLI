import { Component, ViewChild, ElementRef, AfterContentInit, OnDestroy } from '@angular/core';
import { chart } from 'highcharts';
import { baseChartOptions } from '../base-chart-options';
import * as annotations from 'highcharts/modules/annotations.js';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements AfterContentInit, OnDestroy {
  @ViewChild('areaChartTarget') areaChartTarget: ElementRef;
  chart: Highcharts.ChartObject;

  ngAfterContentInit() {   
    console.log(annotations);
    let typeOfChart = 'area'
    let addedOptions = {
      chart: {
        type: typeOfChart
      },
      colors: ['#ace600', '#99CCCC'],

      annotations: [{
        labels: [{
          point: {
            x: 150,
            y: 10
            }
          }],
          text: 'Test',
          backgroundColor: 'black'
      }]

    };

    Object.assign(baseChartOptions, addedOptions);
    console.log(baseChartOptions);
    this.chart = chart(this.areaChartTarget.nativeElement, baseChartOptions);
  }

  ngOnDestroy() {
    this.chart = null;
  }
}