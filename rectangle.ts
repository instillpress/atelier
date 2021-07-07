import { Point } from './point';

export class Rectangle {
  constructor(
    public left: number,
    public top: number,
    public width: number,
    public height: number
  ) {}

  contains(x: number, y: number) {
    return (
      x >= this.left &&
      x <= this.left + this.width &&
      y >= this.top &&
      y <= this.top + this.height
    );
  }

  offset(x: number, y: number) {
    return new Rectangle(this.left + x, this.top + y, this.width, this.height);
  }

  equals(other: Rectangle) {
    return (
      this.left === other.left &&
      this.top === other.top &&
      this.width === other.width &&
      this.height === other.height
    );
  }

  center(): Point {
    return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
  }
}
