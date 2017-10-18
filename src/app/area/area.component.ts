import { Component, ViewChild, ElementRef, AfterContentInit, OnDestroy } from '@angular/core';
import { chart } from 'highcharts';
import { baseChartOptions } from '../base-chart-options';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements AfterContentInit, OnDestroy {
  @ViewChild('areaChartTarget') areaChartTarget: ElementRef;
  chart: Highcharts.ChartObject;

  ngAfterContentInit() {   
    let typeOfChart = 'area'
    let addedOptions = {
      chart: {
        type: typeOfChart
      },
      colors: ['#ace600', '#99CCCC'],

      annotations: [{
        labels: [{
          point: {
            x: 0,
            y: 0
            },
            text: 'Test',
            backgroundColor: 'black'
          }]
      }]

    };

    Object.assign(baseChartOptions, addedOptions);

    this.chart = chart(this.areaChartTarget.nativeElement, baseChartOptions);
  }

  ngOnDestroy() {
    this.chart = null;
  }
}