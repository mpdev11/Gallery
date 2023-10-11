export class Painting {
  id: number;
  guid: string;
  title: string;
  caption: string;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || 0;
    this.guid = (obj && obj.guid && obj.guid.rendered) || '';
    this.title = (obj && obj.title && obj.title.rendered) || '';
    this.caption = (obj && obj.caption && obj.caption.rendered) || '';
  }
}
