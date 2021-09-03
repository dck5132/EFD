import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// Routing
import { AppRoutingModule } from './app-routing.module';

// Highcharts
import { HighchartsChartModule } from 'highcharts-angular';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HighPieChartComponent } from './components/high-pie-chart/high-pie-chart.component';
import { DecisionMakerComponent } from './components/decision-maker/decision-maker.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HighchartsChartModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    DecisionMakerComponent,
    HighPieChartComponent,
    ButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
