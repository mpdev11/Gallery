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

  constructor() { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    const imgDisplayDivs = document.querySelectorAll('.painting-wrapper');

    imgDisplayDivs.forEach((div) => {
      const mainImg = div.querySelector('.main-painting');
      const placeholderImg = div.querySelector('.placeholder-painting');
      const loadingAnimationDiv = div.querySelector('#animation-div');

      function placeholderImageLoaded() {
        if (placeholderImg && loadingAnimationDiv) {
          placeholderImg.classList.remove('not-visible');
          loadingAnimationDiv.classList.add('lds-dual-ring');
        }
      }

      if (placeholderImg) {
        placeholderImg.addEventListener('load', placeholderImageLoaded);
      }

      function mainImageLoaded() {
        if (mainImg && placeholderImg && loadingAnimationDiv) {
          mainImg.classList.remove('not-visible');
          mainImg.classList.add('fade-in');
          placeholderImg.classList.add('fade-out');
          loadingAnimationDiv.classList.remove('lds-dual-ring');
        }
      }

      if (mainImg) {
        mainImg.addEventListener('load', mainImageLoaded);
      }
    });
  }
}
