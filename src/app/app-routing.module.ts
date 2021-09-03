import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DecisionMakerComponent } from './components/decision-maker/decision-maker.component';


const routes: Routes = [
  { path: '', component: DecisionMakerComponent },
  { path: '**', component: DecisionMakerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
