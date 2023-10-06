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

// @Component({
//   selector: 'app-painting-page',
//   templateUrl: './painting-page.component.html',
//   styleUrls: ['./painting-page.component.scss'],
//   animations: [
//     trigger('transition', [
//       state('initial', style({ transform: 'translateX(0)' })),
//       state('left', style({ transform: 'translateX(-50%)' })),
//       state('right', style({ transform: 'translateX(150%)' })),
//       transition('initial <=> left', animate('2s ease-out')),
//       transition('initial <=> right', animate('2s ease-out')),
//     ]),
//   ],
// })
@Component({
  selector: 'app-painting-page',
  templateUrl: './painting-page.component.html',
  styleUrls: ['./painting-page.component.scss'],
  animations: [
    trigger('justifyContentTransition', [
      state(
        'center',
        style({
          justifyContent: 'center',
        })
      ),
      state(
        'space-evenly',
        style({
          justifyContent: 'space-evenly',
        })
      ),
      transition(
        'center <=> space-evenly',
        animate(
          '500ms',
          keyframes([
            style({ justifyContent: 'center' }),
            style({ justifyContent: 'space-evenly' }),
          ])
        )
      ),
    ]),
  ],
})
export class PaintingPageComponent implements OnInit {
  paintingId: Number = 0;
  animationStatePainting: string = 'initial';
  animationStateText: string = 'initial';
  animationState: string = 'center';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.paintingId = params['id'];
    });
  }

  ngOnInit() {
    setTimeout(() => {
      // this.animationStatePainting = 'left';
      // this.animationStateText = 'right';
      this.animationState = 'space-evenly';
    }, 3500);
  }
}
