import { Injectable } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  // Subjects to emit
  private mapSelected: Subject<string> = new Subject();

  // Observables to listen for subject that is emitted
  public mapSelected$: Observable<string> = this.mapSelected.asObservable();

  constructor() { }

  onMapSelected(change: string = '') {
    this.mapSelected.next(change);
  }

  unsubscribe(subscription: Subscription) {
    if (subscription) {
      subscription.unsubscribe();
    }
  }
}
