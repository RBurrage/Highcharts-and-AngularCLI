import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { AreaComponent } from './area/area.component';

import { chart } from 'highcharts';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
