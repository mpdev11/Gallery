import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss'],
})
export class PaintingComponent implements OnInit {
  @Input()
  imgIndex: Number = 0;
  constructor() {}

  ngOnInit(): void {}
}
