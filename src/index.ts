import { mazeGenerator } from "./mazeGeneration/mazeGenerator";
import { Canvas } from "./screen/Canvas";
import { LightSheet } from "./screen/LightSheet";
import { Light } from "./util/Light";

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

//TESTS ONLY
//var mazeGen: mazeGenerator = new mazeGenerator(canvas.getCanvasColumns(),canvas.getCanvasRows(),10);
//console.log(mazeGen.size);

var lightSheet: LightSheet = new LightSheet(HEIGHT/CELLSIZE,WIDTH/CELLSIZE,CELLSIZE);
lightSheet.setLight(20,20,new Light(10));

function main(){
  //MAIN CODE HERE

  //_______BACKGROUND_________
  //--------------------------//
  ctx.fillStyle = 'rgba(0,0,0,255)';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  //--------------------------//

  //canvas.render(ctx);
  lightSheet.render(ctx);





  requestAnimationFrame(main);

}

requestAnimationFrame(main);
