import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private globalStateSubject = new BehaviorSubject<any>(null);
  globalState$ = this.globalStateSubject.asObservable();

  constructor() { }

  setGlobalState(state: any) {
    this.globalStateSubject.next(state);
  }
}
