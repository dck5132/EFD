import { Component, ViewEncapsulation } from '@angular/core';
// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// Modules
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterModule, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Escape-From-Decisions';
}
