import { Component, ViewChild, ElementRef, AfterContentInit, OnDestroy } from '@angular/core';
import { chart } from 'highcharts';
import { baseChartOptions } from '../base-chart-options';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent  implements AfterContentInit, OnDestroy {
  @ViewChild('barChartTarget') barChartTarget: ElementRef;
  chart: Highcharts.ChartObject;

  ngAfterContentInit() {   
    let typeOfChart = 'bar'
    let addedOptions = {
      chart: {
        type: typeOfChart
      }
    };

    Object.assign(baseChartOptions, addedOptions);

    this.chart = chart(this.barChartTarget.nativeElement, baseChartOptions);
  }

  ngOnDestroy() {
    this.chart = null;
  }
}