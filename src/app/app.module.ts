import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Routing
import { AppRoutingModule } from './app-routing.module';

// Highcharts
import { HighchartsChartModule } from 'highcharts-angular';

// Angular Material
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

import { AppComponent } from './app.component';
import { HighPieChartComponent } from './components/high-pie-chart/high-pie-chart.component';
import { DecisionMakerComponent } from './components/decision-maker/decision-maker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HighchartsChartModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule
  ],
  declarations: [
    AppComponent,
    DecisionMakerComponent,
    HighPieChartComponent,
    DropdownComponent,
    FooterComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
