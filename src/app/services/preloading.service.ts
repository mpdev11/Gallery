import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadingService {
  preload(route: Route): Observable<any> {
    console.log('Preloading route:', route);
    if (route.data && route.data['preload']) {
      return of(null); // Preload PaintingsComponent when preload flag is set to true
    } else {
      return of(); // Do not preload other routes
    }
  }
}
