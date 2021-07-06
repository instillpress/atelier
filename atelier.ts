export class Atelier {
  private context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      this.draw();
    };

    window.addEventListener('resize', resizeCanvas, false);

    resizeCanvas();
  }

  draw() {
    const width = this.context.canvas.width;
    const height = this.context.canvas.height;

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, width, height);
  }
}
