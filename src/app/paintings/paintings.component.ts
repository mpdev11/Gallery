import { Component, HostListener, OnInit } from '@angular/core';
import { PaintingsService } from '../services/paintings.service';
import { Painting } from '../model/model';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss'],
})
export class PaintingsComponent implements OnInit {
  private scrollPositionKey = 'scrollPosition';
  paintings: Painting[] = [];

  constructor(
    private paintingsService: PaintingsService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        localStorage.setItem(this.scrollPositionKey, window.scrollY.toString());
        console.log('y:', localStorage.getItem(this.scrollPositionKey));
      }
    });
    console.log('y:', localStorage.getItem(this.scrollPositionKey));
  }

  ngOnInit() {
    console.log('y:', localStorage.getItem(this.scrollPositionKey));
    this.getPaintings().subscribe((data: Painting[]) => {
      this.paintings = data;
    });
  }

  getPaintings(): Observable<Painting[]> {
    return this.paintingsService.getAllPaintings();
  }

  restoreScrollPosition() {
    const storedScrollPosition = localStorage.getItem(this.scrollPositionKey);
    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition, 10));
    }
  }
}
