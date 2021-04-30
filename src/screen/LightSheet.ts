import { Light } from "../util/Light";
import { Canvas } from "./Canvas";

export class LightSheet {
  lights: Light[];
  rows: number;
  columns: number;
  cellSize: number;
  lightCanvas: Canvas;
  maxLightDist: number;

  constructor(rows: number, columns: number, cellSize: number) {
    this.maxLightDist = Math.sqrt(0*0+this.rows*this.columns);
    this.rows = rows;
    this.columns = columns;
    this.cellSize = cellSize;
    this.lights = new Array < Light > (this.rows * this.columns);
    this.lightCanvas = new Canvas(this.rows, this.columns, this.cellSize);


    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        this.lights[this.getIndex(x, y)] = new Light(0);
      }
    }
  }


  //-------------------------------------------------
  //---------------VERY IMPORTANT PART---------------
  //-------------------------------------------------
  public recalculateLights() {
    //loop throught all lights
    for (var lightX = 0; lightX < this.columns; lightX++) {
      for (var lightY = 0; lightY < this.rows; lightY++) {
        //if emissive...
        if (this.lights[this.getIndex(lightX, lightY)].emissive) {
          //  loop through all canvas cells...
          for (var y = 0; y < this.rows; y++) {
            for (var x = 0; x < this.columns; x++) {
              //    add colour equal to their distance from light clamped to 255 
              //    multiplied by brightness of light
              this.lightCanvas.setColorVal(
                x,
                y,
                this.lightCanvas.getColorVal(x, y) +
                (Math.sqrt(x * lightX + y * lightY) / this.maxLightDist) * 255 *
                this.lights[this.getIndex(lightX,lightY)].getBrightnessValue() / 
                this.lights[this.getIndex(lightX,lightY)].max
              );
            }
          }
        }
      }
    }

  }

  //-------------------------------------------------


  setLightBrightnessValues(arg: number[]): void {
    for (var y = 0; y < this.rows; y++) {

      for (var x = 0; x < this.columns; x++) {

        this.lights[this.getIndex(x, y)].setBrightnessValue(arg[this.getIndex(x, y)]);

      }
    }
  }
  setLightBrightnessValue(x: number, y: number, val: number): void {
    if (x >= 0 && x <= this.columns) {
      if (y >= 0 && y <= this.rows) {
        this.lights[this.getIndex(x, y)].setBrightnessValue(val);
      }
    }
  }
  setLight(x: number, y: number, light: Light): void {
    if (x >= 0 && x <= this.columns) {
      if (y >= 0 && y <= this.rows) {
        this.lights[this.getIndex(x, y)] = light;
      }
    }
    this.recalculateLights();
  }
  setLights(arg: Light[]): void {
    for (var y = 0; y < this.rows; y++) {

      for (var x = 0; x < this.columns; x++) {

        this.setLight(x, y, arg[this.getIndex(x, y)]);

      }
    }
  }
  render(ctx: CanvasRenderingContext2D): void {
    for(var y = 0; y < this.rows;y++){

      for(var x = 0; x < this.columns;x++){     

        var val: number = this.lightCanvas[this.getIndex(x,y)].getColorVal();

        if(val == 0){
          ctx.fillStyle = 'black';
        }else{
          ctx.fillStyle = `rgba(${val},${val},${val},255)`;
        }        
        ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize,this.cellSize);
        
      }      
    }
  }
  renderLights(ctx: CanvasRenderingContext2D): void {
    for (var y = 0; y < this.rows; y++) {

      for (var x = 0; x < this.columns; x++) {

        var pixel: Light = this.lights[this.getIndex(x, y)];

        var val: number = (pixel.getBrightnessValue() / (pixel.max - pixel.min)) * 255;

        if (val == 0) {
          ctx.fillStyle = 'black';
        } else {
          ctx.fillStyle = `rgba(${val},${val},${val},255)`;
        }
        ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);

      }
    }
  }
  public getLightSheetRows(): number {
    throw new Error("Method not implemented.");
  }
  public getLightSheetColumns(): number {
    return this.columns;
  }
  public getLightSheetCellSize(): number {
    return this.cellSize;
  }
  public getIndex(x: number, y: number): number {
    return (y * this.columns) + x;
  }
  public getLights(): Light[] {
    return this.lights;
  }


  //-----------------------------------
  //---------------RESET---------------
  //-----------------------------------
  public resetLights(): void {
    for (var y = 0; y < this.columns; y++) {
      for (var x = 0; x < this.rows; x++) {
        this.lights[this.getIndex(x, y)].setBrightnessValue(0);
      }
    }
  }
}