import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecisionMakerComponent } from './components/decision-maker/decision-maker.component';


const routes: Routes = [
  { path: '', component: DecisionMakerComponent },
  // Example of how to lazy load a standalone component - commented out since this is the main component
  // { 
  //   path: '' ,
  //   loadComponent() {
  //   return import('./components/decision-maker/decision-maker.component').then(m => m.DecisionMakerComponent);
  //   } 
  // },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
