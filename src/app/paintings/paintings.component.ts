import { Component, Input, OnInit } from '@angular/core';
import { Painting } from '../model/model';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalStateService } from '../services/global-state.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss'],
})
export class PaintingsComponent implements OnInit {
  private scrollPositionKey = 'scrollPosition';
  paintings: Painting[] = [];
  previousPosition: number = 0;
  globalState: any;

  constructor(
    private router: Router, private globalStateService: GlobalStateService
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
  ngOnInit(): void {
    this.globalStateService.globalState$.subscribe(state => {
      this.globalState = state;
      this.paintings = this.globalState.paintings
    });
  }


  // ngOnInit() {
  //   console.log('PaintingsComponent initialized');
  //   this.getPaintings().subscribe((data: Painting[]) => {
  //     this.paintings = data;
  //   });
  // }

  // getPaintings(): Observable<Painting[]> {
  //   return this.paintingsService.getAllPaintings();
  // }

  ngAfterContentChecked() {
    if (this.previousPosition !== 0) {
      this.restoreScrollPosition();
    }
  }

  restoreScrollPosition(): void {
    if (this.previousPosition !== 0) {
      window.scrollTo(0, this.previousPosition);
    }
  }
}
