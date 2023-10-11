import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Painting } from './model/model';

@Injectable({
  providedIn: 'root',
})
export class PaintingsService {
  private baseUrl = 'https://vesninagalerija.com/';

  constructor(private http: HttpClient) {}

  getAllPaintings(): Observable<Painting[]> {
    const url = `${this.baseUrl}wp-json/wp/v2/media`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data.map((elem: any) => new Painting(elem));
      })
    );
  }
  getOnePainting(id: number): Observable<Painting> {
    const url = `${this.baseUrl}wp-json/wp/v2/media/${id}`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return new Painting(data);
      })
    );
  }
}
