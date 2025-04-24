import { Component, signal, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  appVersion = signal(environment.appVersion);
}
