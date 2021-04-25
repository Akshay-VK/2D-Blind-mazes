const CANVAS: HTMLCanvasElement = document.querySelector('canvas');
const ctx: CanvasRenderingContext2D = CANVAS.getContext('2d');

const WIDTH: number = 800;
const HEIGHT: number = 600;

ctx.canvas.width = WIDTH;
ctx.canvas.height = HEIGHT;

function main(){
  //MAIN CODE HERE

  //BACKGROUND
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);



  requestAnimationFrame(main);

}

requestAnimationFrame(main);
