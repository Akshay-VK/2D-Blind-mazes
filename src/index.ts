import { Canvas } from "./canvas";

//SETUP
const MYCANVAS: HTMLCanvasElement = document.querySelector('canvas');
const ctx: CanvasRenderingContext2D = MYCANVAS.getContext('2d');

const WIDTH: number = 800;
const HEIGHT: number = 600;
const CELLSIZE: number = 10;

ctx.canvas.width = WIDTH;
ctx.canvas.height = HEIGHT;
//_________________________

//VARIABLES
var canvas: Canvas = new Canvas(HEIGHT/CELLSIZE, WIDTH/CELLSIZE, CELLSIZE);

function main(){
  //MAIN CODE HERE

  //_______BACKGROUND_________
  //--------------------------//
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  //--------------------------//

  canvas.render(ctx);





  requestAnimationFrame(main);

}

requestAnimationFrame(main);
