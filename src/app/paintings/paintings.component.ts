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
      }
    });

    console.log('y:', localStorage.getItem(this.scrollPositionKey));
  }

  ngOnInit() {
    this.getPaintings().subscribe((data: Painting[]) => {
      this.paintings = data;

      setTimeout(() => {
        this.restoreScrollPosition();
      }, 0);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        localStorage.setItem(this.scrollPositionKey, window.scrollY.toString());
      }
    });
  }

  getPaintings(): Observable<Painting[]> {
    return this.paintingsService.getAllPaintings();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    localStorage.setItem(this.scrollPositionKey, window.scrollY.toString());
  }

  restoreScrollPosition() {
    console.log('y:', localStorage.getItem(this.scrollPositionKey));
    const storedScrollPosition = localStorage.getItem(this.scrollPositionKey);
    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition, 10));
    }
  }
}
