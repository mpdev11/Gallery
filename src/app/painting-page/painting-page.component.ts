import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-painting-page',
  templateUrl: './painting-page.component.html',
  styleUrls: ['./painting-page.component.scss'],
})
export class PaintingPageComponent implements OnInit {
  paintingId: Number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.paintingId = params['id'];
    });
  }

  ngOnInit() {}
}
