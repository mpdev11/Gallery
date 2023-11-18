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
  previousPosition: number = 0;

  constructor(
    private paintingsService: PaintingsService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        localStorage.setItem(this.scrollPositionKey, window.scrollY.toString());
      }
    });
    this.previousPosition = Number(
      localStorage.getItem(this.scrollPositionKey)
    );
  }

  ngOnInit() {
    this.getPaintings().subscribe((data: Painting[]) => {
      this.paintings = data;
    });
  }

  ngAfterContentChecked(): void {
    console.log('a');
    this.restoreScrollPosition();
  }

  getPaintings(): Observable<Painting[]> {
    return this.paintingsService.getAllPaintings();
  }

  restoreScrollPosition() {
    if (this.previousPosition != 0) {
      window.scrollTo(0, this.previousPosition);
    }
  }
}
