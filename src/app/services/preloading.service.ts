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
      return of(null);
    } else {
      return of();
    }
  }

  preloadPaintings(): Observable<any> {
    return of(null);
  }
}
