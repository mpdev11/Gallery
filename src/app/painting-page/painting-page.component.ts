import {
  animate,
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
  animations: [
    trigger('transition', [
      state('initial', style({ transform: 'translateX(0)' })),
      state('left', style({ transform: 'translateX(-50%)' })),
      state('right', style({ transform: 'translateX(150%)' })),
      transition('initial <=> left', animate('2s ease-out')),
      transition('initial <=> right', animate('2s ease-out')),
    ]),
  ],
})
export class PaintingPageComponent implements OnInit {
  paintingId: Number = 0;
  animationStatePainting: string = 'initial';
  animationStateText: string = 'initial';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.paintingId = params['id'];
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.animationStatePainting = 'left';
      this.animationStateText = 'right';
    }, 3000);
  }
}
