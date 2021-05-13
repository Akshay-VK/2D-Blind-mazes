import { Cell } from "../util/Cell";
import { Vector } from "../util/Vector";

export class mazeGenerator{
    maze: Array<Cell>;
    generatedMaze: Array<Cell>;
    size:Vector;
    mazeSize: Vector;
    cellSize:number;
    constructor(screenWidth: number,screenHeight: number, cellSize: number){
        //init
        this.size = new Vector(0,0);
        this.cellSize = cellSize;

        this.determineMazeResolution(screenWidth,screenHeight,cellSize);

        this.maze = new Array<Cell>(this.size.getX()*this.size.getY());

        this.mazeSize = new Vector((this.size.getX()/2)-cellSize,(this.size.getX()/2)-cellSize);
        
        //init generated maze
        this.generatedMaze = new Array<Cell>(
                ((this.size.getX()/2)-cellSize)*
                ((this.size.getY()/2)-cellSize)
        );
        for(var y = 0;y < this.mazeSize.getY();y++){
            for(var x = 0; x < this.mazeSize.getX();x++){
                this.generatedMaze[y*this.mazeSize.getX()+x] = new Cell(
                    new Vector(x,y),
                    this.cellSize,
                    this.cellSize,
                    true
                )
            }
        }
    }


    generateMaze(){
        //Given a current cell as a parameter,
        //Mark the current cell as visited
        //While the current cell has any unvisited neighbour cells
        //  Choose one of the unvisited neighbours
        //  Remove the wall between the current cell and the chosen cell
        //  Invoke the routine recursively for a chosen cell
        var currentX = 0;
        var currentY = 0;
        var currentCell = this.generatedMaze[this.getIndex(currentX,currentY)];

        currentCell.visited = true;

        var neighbours: number[] = this.checkNeighbours(currentX,currentY);

        while(neighbours.length != 0){
            var randomIndex = Math.floor(Math.random()*neighbours.length);
            var chosenCell: Cell = this.generatedMaze[randomIndex];

            //REMOVING WALLS

            //right
            if(chosenCell.position.getX() > currentCell.position.getX()){
                this.generatedMaze[this.getIndex(currentCell.position.getX(),currentCell.position.getY())].visited = true;

                this.generatedMaze[this.getIndex(chosenCell.position.getX(),chosenCell.position.getY())].visited = true;
                
            }
        }

    }

    private checkNeighbours(x: number,y: number): number[]{

        var neighbourIndeces: number[] = new Array<number>();
        
        var top:    Cell = this.getIndex(x , y - 1) >= 0 ? this.generatedMaze[this.getIndex(x , y - 1)] : undefined;
        var bottom: Cell = this.getIndex(x , y + 1) >= 0 ? this.generatedMaze[this.getIndex(x , y + 1)] : undefined;
        var right:  Cell = this.getIndex(x + 1 , y) >= 0 ? this.generatedMaze[this.getIndex(x + 1 , y)] : undefined;
        var left:   Cell = this.getIndex(x - 1 , y) >= 0 ? this.generatedMaze[this.getIndex(x - 1 , y)] : undefined;
        
        if(top && !top.visited){

            neighbourIndeces.push(this.getIndex(top.position.getX(),top.position.getY()));

        }else if(top && !top.visited){

            neighbourIndeces.push(this.getIndex(top.position.getX(),top.position.getY()));

        }else if(top && !top.visited){

            neighbourIndeces.push(this.getIndex(top.position.getX(),top.position.getY()));

        }else if(top && !top.visited){

            neighbourIndeces.push(this.getIndex(top.position.getX(),top.position.getY()));

        }

        return neighbourIndeces;
    }

    getIndex(x: number, y: number): number{

        if(x < 0 || y < 0 || x > this.mazeSize.getX()-1 || y > this.mazeSize.getY()-1){
            return -1;
        }

        return y*this.mazeSize.getX()+x;
    }
    

    //function to determine the resolution of the maze
    private determineMazeResolution(screenWidth: number, screenHeight: number, cellSize: number): void{        
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