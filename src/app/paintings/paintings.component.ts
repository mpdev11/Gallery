import { Component, OnInit } from '@angular/core';
import { PaintingsService } from '../paintings.service';
import { Painting } from '../model/model';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss'],
})
export class PaintingsComponent implements OnInit {
  constructor(private service: PaintingsService) {}
  paintings: Painting[] = [];
  ngOnInit() {
    this.getPaintings();
  }
  getPaintings(): void {
    this.service.getAllPaintings().subscribe({
      next: (data: Painting[]) => {
        this.shuffle(data);
        this.paintings = data;
      },
    });
  }
  shuffle(array: Painting[]) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
