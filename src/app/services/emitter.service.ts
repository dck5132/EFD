import { Injectable } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  // Subjects to emit
  private mapSelected: Subject<string>;

  // Observables to listen for subject that is emitted
  public mapSelected$: Observable<string>;

  constructor() {
    this.mapSelected = new Subject<string>();
    this.mapSelected$ = this.mapSelected.asObservable();
   }

  onMapSelected(change = ''): void {
    this.mapSelected.next(change);
  }

  unsubscribe(subscription: Subscription): void {
    if (subscription) {
      subscription.unsubscribe();
    }
  }
}
