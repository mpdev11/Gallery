export class Painting {
  id: number;
  painting: string;
  painting_small: string;
  name: string;
  dimensions: string;
  color_type: string;
  canvas_type: string;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || 0;
    this.painting = (obj && obj.acf && obj.acf.painting) || '';
    this.painting_small = (obj && obj.acf && obj.acf.painting_small) || '';
    this.name = (obj && obj.acf && obj.acf.name) || '';
    this.dimensions = (obj && obj.acf && obj.acf.dimensions) || '';
    this.color_type = (obj && obj.acf && obj.acf.color_type) || '';
    this.canvas_type = (obj && obj.acf && obj.acf.canvas_type) || '';
  }
}
