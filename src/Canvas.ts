import { Color } from "./util/Color";

export class Canvas{


  canvas: Color[][];
  rows: number;
  columns: number;
  cellSize: number;

  constructor(rows: number, columns: number, cellSize: number){
    //setting vars
    this.cellSize = cellSize;

    this.rows = rows;
    this.columns = columns;

    //setting default value of canvas as black (0)
    this.canvas = [];
    for(let y = 0; y < this.rows;y++){
      this.canvas[y] = [];

      for(let x = 0; x < this.columns;x++){

        this.canvas[x][y] = new Color();

      }      
    }
  }
  //setColorVALS is to set the color value of the canvas pixels without replacing them
  setColorVals(arg: Array<Array<number>>){

      for(var y = 0; y < this.rows; y++){

        for(var x = 0; x < this.columns; x++){

          this.canvas[x][y].setColorVal(arg[x][y]);

        }      
      }

  }
  //setCOLOR on the other hand replaces the canvas with the specified array of colors
  setColors(arg: Array<Array<Color>>){

    for(var y = 0; y < this.rows;y++){

      for(var x = 0; x < this.columns;x++){

        this.canvas[x][y] = arg[x][y];
        
      }      
    }

  }

  //method for renderring the pixels/colors to the screen
  render(ctx: CanvasRenderingContext2D){
    for(var y = 0; y < this.rows;y++){

      for(var x = 0; x < this.columns;x++){

        var val: number = this.canvas[x][y].getColorVal();

        ctx.fillStyle = `rgba(${val},${val},${val})`;
        ctx.fillRect(x*this.cellSize, y*this.cellSize, this.cellSize,this.cellSize);
        
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
}
