import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
// envs
import { environment } from './environments/environment';
// Components
import { AppComponent } from './app/app.component';
import { DecisionMakerComponent } from './app/components/decision-maker/decision-maker.component';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: '', component: DecisionMakerComponent },
  // Example of how to lazy load a standalone component - commented out since this is the main component
  // { 
  //   path: '' ,
  //   loadComponent() {
  //   return import('./components/decision-maker/decision-maker.component').then(m => m.DecisionMakerComponent);
  //   } 
  // },
  // { path: 'test', component: HighPieChartComponent},
  { path: '**', redirectTo: ''}
];

bootstrapApplication(AppComponent, {
  providers: [
    // Sets up routing locally inside of 
    provideRouter(routes)
    // If using a routing module (migration in process)
    // importProvidersFrom(AppRoutingModule)
  ]
});
