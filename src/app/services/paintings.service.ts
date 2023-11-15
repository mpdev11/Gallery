import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Painting } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class PaintingsService {
  private baseUrl = 'https://vesninagalerija.com/wp-json/wp/v2';

  constructor(private http: HttpClient) {}

  getAllPaintings(): Observable<Painting[]> {
    const url = `${this.baseUrl}/painting/?acf_format=standard&per_page=50`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data.map((elem: any) => new Painting(elem));
      })
    );
  }
  getOnePainting(id: number): Observable<Painting> {
    const url = `${this.baseUrl}/painting/${id}/?_fields=acf&acf_format=standard`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return new Painting(data);
      })
    );
  }
}
