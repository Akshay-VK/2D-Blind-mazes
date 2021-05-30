import { mazeGenerator } from "./mazeGeneration/mazeGenerator";
import { Loader } from "./organizedCode/Loader";
import { Canvas } from "./screen/Canvas";
import { Dither } from "./screen/Dither";
import { LightSheet } from "./screen/LightSheet";
import { BWImage } from "./util/BWImage";
import { BWAnimation } from "./util/BWAnimation"
import { Vec2 } from "./util/Vectors/Vec2";
//SETUP
const MYCANVAS: HTMLCanvasElement = document.querySelector('canvas');
const ctx: CanvasRenderingContext2D = MYCANVAS.getContext('2d');


const CELLSIZE: number = 4;

//optional
//const WIDTH: number = window.innerWidth - (window.innerWidth % CELLSIZE);
//const HEIGHT: number = window.innerHeight - (window.innerHeight % CELLSIZE);
const WIDTH:number = 1000;
const HEIGHT: number = 600;

ctx.canvas.width = WIDTH;
ctx.canvas.height = HEIGHT;
//_________________________

//VARIABLES
var canvas: Canvas = new Canvas(HEIGHT/CELLSIZE, WIDTH/CELLSIZE, CELLSIZE,255);
var lightSheet: LightSheet = new LightSheet(HEIGHT/CELLSIZE, WIDTH/CELLSIZE, CELLSIZE,10);
var dither: Dither = new Dither();


var PLAYING: boolean = false;


var spriteInitializer: Loader = new Loader();

//TESTS ONLY
var mazeGen: mazeGenerator = new mazeGenerator(
  (canvas.getCanvasColumns()/6)*5,
  (canvas.getCanvasRows()/9)*8,
  8
);
// var mazeGen: mazeGenerator = new mazeGenerator(
//   (canvas.getCanvasColumns()/10)*9,
//   (canvas.getCanvasRows()/10)*9,
//   10
// );
//var mazeGen: mazeGenerator = new mazeGenerator(1000/5,800/5,5);
//var mazeGen: mazeGenerator = new mazeGenerator(180,120,10);

console.log(mazeGen.size);
mazeGen.generateMaze();
mazeGen.generateWalls();


var spriteSheet: BWAnimation = spriteInitializer.rightWalkSpriteSheet;


var lightValue = 3;
var addState:boolean = true;

lightSheet.setLight(new Vec2(20,20),lightValue);
lightSheet.setLight(new Vec2(60,20),lightValue);
//lightSheet.setLight(new Vector(40,40),lightValue);


//lightSheet.calculateLightEffects();
PLAYING = true;


var frame: number = 1;


//SETTING FRAME-RATE CODE
const FRAMES_PER_SECOND: number =10;  // Valid values are 60,30,20,15,10...
// set the mim time to render the next frame
const FRAME_MIN_TIME: number = (1000/60) * (60 / FRAMES_PER_SECOND) - (1000/60) * 0.5;
var lastFrameTime: number = 0;  // the last frame time
function main(time: number){

  //FRAME-RATE-CODE
  if(time-lastFrameTime < FRAME_MIN_TIME){ //skip the frame if the call is too early
    requestAnimationFrame(main);
    return; // return as there is nothing to do
  }  
  lastFrameTime = time; // remember the time of the rendered frame

  if(PLAYING){
    //MAIN CODE HERE

    //_______BACKGROUND_________
    //--------------------------//
    ctx.fillStyle = 'rgba(0,0,0,255)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    //--------------------------//

    //canvas.render(ctx);



    //REQUIRED

    // canvas.lightCalculatedRender(lightSheet.getCanvases(),ctx);

    // lightSheet.setAllLightLuminanceValues(lightValue);
    // lightSheet.ditherAll(dither,2);
    
    // mazeGen.completeMazeRender(ctx);

    //---------------------------------
    //mazeGen.render(ctx);

    var index = frame % spriteSheet.frames;
    console.log(index,frame);
    spriteSheet.renderFrame(ctx, index , 2);

    // FRAME-RATE AND OTHER CALCULATIONS
    
    if(addState){
      lightValue -= 0.1;
    }else{
      lightValue += 0.1;
    }
    //6,9
    if(lightValue <= 2|| lightValue >= 3){
      addState = !addState;
    }

    if(frame % 100 == 0){
      frame = 0;
    }
    frame++;

    requestAnimationFrame(main);

  }
}

requestAnimationFrame(main);
