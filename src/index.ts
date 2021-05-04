import { mazeGenerator } from "./mazeGeneration/mazeGenerator";
import { Canvas } from "./screen/Canvas";
import { LightSheet } from "./screen/LightSheet";
import { Vector } from "./util/Vector";
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
var PLAYING: boolean = false;

//TESTS ONLY
// var mazeGen: mazeGenerator = new mazeGenerator(canvas.getCanvasColumns(),canvas.getCanvasRows(),10);
// console.log(mazeGen.size);

var lightSheet: LightSheet = new LightSheet(HEIGHT/CELLSIZE, WIDTH/CELLSIZE, CELLSIZE,10);
lightSheet.setLight(new Vector(20,20),1);
lightSheet.setLight(new Vector(60,20),10);
lightSheet.setLight(new Vector(40,40),10);


//lightSheet.calculateLightEffects();
PLAYING = true;
var fc = 0;
function main(){
  if(PLAYING){
    fc+= 5;
    //MAIN CODE HERE

    //_______BACKGROUND_________
    //--------------------------//
    ctx.fillStyle = 'rgba(0,0,0,255)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    //--------------------------//

    //canvas.render(ctx);
    canvas.lightCalculatedRender(lightSheet.getCanvases(),ctx);

    //lightSheet.setAllLightLuminanceValues(Math.abs(Math.sin(fc/11)));





    requestAnimationFrame(main);

  }
}

requestAnimationFrame(main);
