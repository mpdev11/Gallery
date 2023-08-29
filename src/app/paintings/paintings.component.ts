import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss'],
})
export class PaintingsComponent implements OnInit {
  paintings: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {}

  ngOnInit(): void {}
}
