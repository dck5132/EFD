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
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HighPieChartComponent } from './components/high-pie-chart/high-pie-chart.component';
import { DecisionMakerComponent } from './components/decision-maker/decision-maker.component';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
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
    ButtonComponent,
    DropdownComponent,
    FooterComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
