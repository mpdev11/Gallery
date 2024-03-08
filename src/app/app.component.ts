import { Component, OnInit } from '@angular/core';
import { PreloadingService } from './services/preloading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Gallery';

  constructor(private preloadingService: PreloadingService) {}

  ngOnInit() {
    this.preloadingService.preloadPaintings().subscribe(() => {
      console.log('PaintingsComponent preloaded');
    });
  }
}
