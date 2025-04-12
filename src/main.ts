import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
// envs
import { environment } from './environments/environment';
// Modules
import { AppRoutingModule } from './app/app-routing.module';
// Components
import { AppComponent } from './app/app.component';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule)
  ]
});
