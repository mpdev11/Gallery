import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Painting } from '../model/model';
import { PaintingsService } from '../paintings.service';

@Component({
  selector: 'app-painting-page',
  templateUrl: './painting-page.component.html',
  styleUrls: ['./painting-page.component.scss'],
})
export class PaintingPageComponent implements OnInit {
  painting: Painting = new Painting();
  description: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: PaintingsService
  ) {
    this.route.params.subscribe((params: any) => {
      this.painting.id = params['id'];
    });
  }

  ngOnInit() {
    this.getPainting();
  }

  getPainting(): void {
    this.service.getOnePainting(this.painting.id).subscribe({
      next: (painting: Painting) => {
        this.painting = painting;
        this.description = this.painting.caption.slice(3, -5).split('<br />');
        this.description[1] = this.description[1].slice(1);
        this.description[2] = this.description[2].slice(1);
      },
    });
  }
}
