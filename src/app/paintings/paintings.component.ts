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
        this.paintings = data;
      },
    });
  }
}
