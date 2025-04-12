import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {

  appVersion?: string;

  ngOnInit(): void {
    this.appVersion = environment.appVersion;
  }

}
