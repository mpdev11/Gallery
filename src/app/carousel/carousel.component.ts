import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  paintings: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {}

  ngOnInit(): void {}
}
