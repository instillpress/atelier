export class Atelier {
  constructor(public context: CanvasRenderingContext2D) {
    this.draw();
  }

  draw() {
    const width = this.context.canvas.width;
    const height = this.context.canvas.height;

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, width, height);
  }
}
