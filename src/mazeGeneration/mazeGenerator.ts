import { Cell } from "../util/Cell";
import { Vector } from "../util/Vector";

export class mazeGenerator{
    maze: Array<Cell>;
    generatedMaze: Array<Cell>;
    size:Vector;
    cellSize:number;
    constructor(screenWidth: number,screenHeight: number, cellSize: number){
        //init
        this.size = new Vector(0,0);
        this.cellSize = cellSize;

        this.determineMazeResolution(screenWidth,screenHeight,cellSize);

        this.maze = new Array<Cell>(this.size.getX()*this.size.getY());
        
        this.generatedMaze = new Array<Cell>(
                ((this.size.getX()/2)-cellSize)*
                ((this.size.getY()/2)-cellSize)
            );
    }


    generateMaze(){
        //Given a current cell as a parameter,
        //Mark the current cell as visited
        //While the current cell has any unvisited neighbour cells
        //  Choose one of the unvisited neighbours
        //  Remove the wall between the current cell and the chosen cell
        //  Invoke the routine recursively for a chosen cell
    }

    //function to determine the resolution of the maze
    private determineMazeResolution(screenWidth: number, screenHeight: number, cellSize: number){        
        //WIDTH CALCULATIONS
        if(screenWidth % cellSize != 0){
            screenWidth = screenWidth - screenWidth % cellSize;            
        }
        //innerMaze calculations
        if(((screenWidth/cellSize)/2)-1 - Math.floor(((screenWidth/cellSize)/2)-1) != 0){
            screenWidth -= cellSize;
        }

        //HEIGHT CALCULATIONS
        if(screenHeight % cellSize != 0){
            screenHeight = screenHeight - screenHeight % cellSize;            
        }
        //innerMaze calculations
        if(((screenHeight/cellSize)/2)-1 - Math.floor(((screenHeight/cellSize)/2)-1) != 0){
            screenHeight -= cellSize;
        }

        //FINAL ASSIGNING
        this.size.setX(screenWidth / cellSize);
        this.size.setY(screenHeight / cellSize);
        
    }
}