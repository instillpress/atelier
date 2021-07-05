import { Atelier } from './atelier';

let atelierCanvas = document.getElementById(
  'atelierCanvas'
) as HTMLCanvasElement;

new Atelier(atelierCanvas.getContext('2d'));
