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
    const imgDisplayDivs = document.querySelectorAll('.painting-wrapper');

    imgDisplayDivs.forEach((div) => {
      const mainImg = div.querySelector('.main-painting');
      const placeholderImg = div.querySelector('.placeholder-painting');

      function loaded() {
        if (mainImg && placeholderImg) {
          mainImg.classList.remove('not-visible');
          placeholderImg.classList.add('not-visible');
        }
      }

      if (mainImg) {
        mainImg.addEventListener('load', loaded);
      }
    });
  }
}
