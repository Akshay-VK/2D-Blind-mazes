import { Color } from "../util/Color";

export class Canvas{


  public canvas: Color[];
  private rows: number;
  private columns: number;
  private cellSize: number;

  constructor(rows: number, columns: number, cellSize: number, specificColor?:number){
    //setting vars
    this.cellSize = cellSize;

    this.rows = rows;
    this.columns = columns;

    //setting default value of canvas as black (0)
    this.canvas = new Array<Color>(rows*columns);
    //test
    var counter: number = 0;
    for(let y = 0; y < this.rows;y++){
      for(let x = 0; x < this.columns;x++){
        if(typeof(specificColor) != 'undefined'){
          this.canvas[this.getIndex(x,y)] = new Color(specificColor);
        }else{
          this.canvas[this.getIndex(x,y)] = new Color(counter);
        }
        //test
        counter = (x+y)%2*255;
      } 
    }
  }
  //setColorVALS is to set the color value of the canvas pixels without replacing them
  setColorVals(arg: Array<number>){

      for(var y = 0; y < this.rows; y++){

        for(var x = 0; x < this.columns; x++){

          this.canvas[this.getIndex(x,y)].setColorVal(arg[this.getIndex(x,y)]);

        }      
      }

  }
  //sets individual color VALUES
  setColorVal(x: number, y: number, val: number){
    if(x >= 0 && x <= this.columns){
      if(y >= 0 && y <= this.rows){
        this.canvas[this.getIndex(x,y)].setColorVal(val);
      }
    }
  }

  //sets individual colors
  setColor(x: number, y: number, color: Color){
    if(x >= 0 && x <= this.columns){
      if(y >= 0 && y <= this.rows){
        this.canvas[this.getIndex(x,y)] = color;
      }
    }
  }
  //setCOLOR on the other hand replaces the canvas with the specified array of colors
  setColors(arg: Array<Color>){

    for(var y = 0; y < this.rows;y++){

      for(var x = 0; x < this.columns;x++){

        this.setColor(x,y,arg[this.getIndex(x,y)]);
        
      }      
    }

  }

  //method for renderring the pixels/colors to the screen
  render(ctx: CanvasRenderingContext2D){
    for(var y = 0; y < this.rows;y++){

      for(var x = 0; x < this.columns;x++){
        var val: number = this.canvas[this.getIndex(x,y)].getColorVal();

        if(val == 0){
          ctx.fillStyle = 'black';
        }else{
          ctx.fillStyle = `rgba(${val},${val},${val},255)`;
        }   
        
        ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize,this.cellSize);
        
      }      
    } 
  }

  lightCalculatedRender(canvases:Canvas[], ctx: CanvasRenderingContext2D){
    //looping through all light canvases
    for(var i = 0;i < canvases.length;i++){
      //setting current canvas
      var currentCanvas: Canvas = canvases[i];

      //looping through this canvas
      for(var y = 0; y < this.rows;y++){
        for(var x = 0; x < this.columns;x++){


          var alphaVal: number = currentCanvas.getColorVal(x,y);

          if(alphaVal > 0){              
            var colorVal: number = this.canvas[this.getIndex(x,y)].getColorVal();

            ctx.fillStyle = `rgba(${colorVal},${colorVal},${colorVal},${alphaVal/255})`;

            ctx.fillRect(x* this.cellSize,y * this.cellSize, this.cellSize, this.cellSize);
            
          }

        }
      }        
    }
  }
  


  //GETTERS
  public getCanvasRows(): number{
    return this.rows;
  }

  public getCanvasColumns(): number{
    return this.columns;
  }

  public getCanvasCellSize(): number{
    return this.cellSize;
  }
  public getIndex(x: number,y: number): number{
    let index: number = y * this.columns + x;
    return index;
  }
  public getColors(): Array<Color>{
    return this.canvas;
  }
  public getColorVal(x: number,y: number): number{
    if(x >=0 && x < this.columns && y >= 0 && y < this.rows){
      return this.canvas[this.getIndex(x,y)].getColorVal();
    }
  }

  //-------------------------------------
  //----------------RESET----------------
  //-------------------------------------
  public resetColors(){
    for(var y = 0; y < this.rows; y++){
      for(var x = 0; x < this.columns;x++){
        this.setColorVal(x,y,0);
      }
    }
  }

}