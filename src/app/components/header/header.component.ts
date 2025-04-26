import { Component, signal, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
    headerTitle = signal('Welcome to Escape from Decision!');
}
