import { Component, Input, OnInit } from '@angular/core';
import { Painting } from '../model/model';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss'],
})
export class PaintingComponent implements OnInit {
  @Input()
  painting: Painting = new Painting();
  blurDivs = document.querySelectorAll('.blur-load');

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const blurDivs = document.querySelectorAll('.blur-load');

    blurDivs.forEach((div) => {
      const img = div.querySelector('img');

      function loaded() {
        div.classList.add('loaded');
        div.classList.remove('blur');
      }

      if (img && img.complete) {
        loaded();
      } else if (img) {
        img.addEventListener('load', loaded);
      }
    });
  }
}
