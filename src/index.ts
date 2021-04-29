import { Canvas } from "./screen/Canvas";

//SETUP
const MYCANVAS: HTMLCanvasElement = document.querySelector('canvas');
const ctx: CanvasRenderingContext2D = MYCANVAS.getContext('2d');

const CELLSIZE: number = 10;
const WIDTH: number = window.innerWidth - (window.innerWidth % CELLSIZE);
const HEIGHT: number = window.innerHeight - (window.innerHeight % CELLSIZE);

ctx.canvas.width = WIDTH;
ctx.canvas.height = HEIGHT;
//_________________________

//VARIABLES
var canvas: Canvas = new Canvas(HEIGHT/CELLSIZE, WIDTH/CELLSIZE, CELLSIZE);

function main(){
  //MAIN CODE HERE

  //_______BACKGROUND_________
  //--------------------------//
  ctx.fillStyle = 'rgba(0,0,0,255)';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  //--------------------------//

  canvas.render(ctx);





  requestAnimationFrame(main);

}

requestAnimationFrame(main);
