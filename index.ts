import { Atelier } from './atelier';

import './style.css';

const canvas = document.getElementById('atelier') as HTMLCanvasElement;
const context = canvas.getContext('2d');

new Atelier(context);
