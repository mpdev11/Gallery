import { Component, OnInit } from '@angular/core';
import { Painting } from './model/model';
import { PaintingsService } from './services/paintings.service';
import { Observable } from 'rxjs';
import { GlobalStateService } from './services/global-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Gallery';

  constructor(private paintingsService: PaintingsService, private globalStateService: GlobalStateService) { }

  ngOnInit() {

    // this.getPaintings().subscribe((data: Painting[]) => {
    //   this.globalStateService.setGlobalState({ paintings: data });
    // });

  }

  // getPaintings(): Observable<Painting[]> {
  //   return this.paintingsService.getAllPaintings();
  // }
}

