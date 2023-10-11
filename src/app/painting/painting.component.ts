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
  constructor() {}

  ngOnInit(): void {}
}
