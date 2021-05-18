import {
    Cell
} from "../util/Cell";
import { Color } from "../util/Color";
import {
    Vector
} from "../util/Vector";

export class mazeGenerator {
    maze: Array<Cell> ;
    generatedMaze: Array<Cell> ;
    size: Vector;
    mazeSize: Vector;
    cellSize: number;

    private generateMazeStep1: boolean = false;

    constructor(screenWidth: number, screenHeight: number, cellSize: number) {
        //init
        this.size = new Vector(0, 0);
        this.cellSize = cellSize;

        this.determineMazeResolution(screenWidth, screenHeight, cellSize);

        this.maze = new Array<Cell> (this.size.getX() * this.size.getY());

        this.mazeSize = new Vector((this.size.getX() / 2) - 1, (this.size.getY() / 2) - 1);

        //init generated maze
        this.generatedMaze = new Array<Cell> (
            ((this.size.getX() / 2) - 1) *
            ((this.size.getY() / 2) - 1)
        );
        for (var y = 0; y<this.mazeSize.getY(); y++) {
            for (var x = 0; x<this.mazeSize.getX(); x++) {
                this.generatedMaze[y * this.mazeSize.getX() + x] = new Cell(
                    new Vector(x, y),
                    this.cellSize,
                    this.cellSize,
                    true
                );
            }
        }
        for (var y = 0; y<this.size.getY(); y++) {
            for (var x = 0; x<this.size.getX(); x++) {
                this.maze[y * this.size.getX() + x] = new Cell(
                    new Vector(x, y),
                    this.cellSize,
                    this.cellSize,
                    false,
                    new Color(255)
                );
            }
        }
        
    }

    //GENERATE MAZE STEP 1
    public generateMaze(): void {
        /*
        Choose the initial cell, mark it as visited and push it to the stack
            While the stack is not empty
                Pop a cell from the stack and make it a current cell
                If the current cell has any neighbours which have not been visited
                    Push the current cell to the stack
                    Choose one of the unvisited neighbours
                    Remove the wall between the current cell and the chosen cell
                    Mark the chosen cell as visited and push it to the stack
         */
        //console.log('reaching 1');

        var stack: number[] = new Array<number> ();

        //Choose the initial cell, mark it as visited and push it to the stack
        var currentCell: number =0;      

        this.generatedMaze[currentCell].visited = true;

        stack.push(0);

        //While the stack is not empty
        while (stack.length != 0) {
            //console.log('reaching 2');
            //Pop a cell from the stack and mark it as current cell
            
            currentCell = stack.pop();

            var currentCellNeighbours: number[] = this.checkNeighbours(this.generatedMaze[currentCell].posX, this.generatedMaze[currentCell].posY);
            
            
            //console.log(currentCellNeighbours);
            //If the current cell has any neighbours which have not been visited
            if (currentCellNeighbours.length != 0) {
                stack.push(currentCell);

                //choose a random one
                var chosenOneIndex: number = Math.floor(Math.random() * currentCellNeighbours.length);
                var chosenOne: number = currentCellNeighbours[chosenOneIndex];
                
                //console.log(currentCellNeighbours.length , chosenOneIndex)

                //REMOVING WALLS

                //right
                if (this.generatedMaze[chosenOne].posX> this.generatedMaze[currentCell].posX) {
                    this.generatedMaze[chosenOne].updateBound(-1, 0 , false);
                    this.generatedMaze[currentCell].updateBound(1, 0 , false);
                }
                //left
                if (this.generatedMaze[chosenOne].posX<this.generatedMaze[currentCell].posX) {
                    this.generatedMaze[chosenOne].updateBound(1, 0 , false);
                    this.generatedMaze[currentCell].updateBound(-1, 0 , false);
                }
                //up
                if (this.generatedMaze[chosenOne].posY<this.generatedMaze[currentCell].posY) {
                    this.generatedMaze[chosenOne].updateBound(0, 1 , false);
                    this.generatedMaze[currentCell].updateBound(0, -1 , false);
                }
                //down
                if (this.generatedMaze[chosenOne].posY> this.generatedMaze[currentCell].posY) {
                    this.generatedMaze[chosenOne].updateBound(0, -1);
                    this.generatedMaze[currentCell].updateBound(0, 1);
                }

                this.generatedMaze[chosenOne].visited = true;

		        stack.push(chosenOne);

            }
        }
        this.generateMazeStep1 = true;
        //console.log(this.generatedMaze)
    }

    public generateWalls(): void {
        if(this.generateMazeStep1){
            
            var i: number = 0;
            for(var y = 1; y < this.size.getY()-1; y += 2){
                for(var x = 1; x < this.size.getX()-1; x += 2){
                    if(this.generatedMaze[i].top){
                        this.maze[this.getIndex(x - 1,y - 1,this.size.getX())].visited = true;
                        this.maze[this.getIndex(x    ,y - 1,this.size.getX())].visited = true;
                        this.maze[this.getIndex(x + 1,y - 1,this.size.getX())].visited = true;                        
                    }
                    if(this.generatedMaze[i].right){
                        this.maze[this.getIndex(x + 1,y - 1,this.size.getX())].visited = true;
                        this.maze[this.getIndex(x + 1,y    ,this.size.getX())].visited = true;
                        this.maze[this.getIndex(x + 1,y + 1,this.size.getX())].visited = true;                        
                    }
                    if(this.generatedMaze[i].left){
                        this.maze[this.getIndex(x - 1,y - 1,this.size.getX())].visited = true;
                        this.maze[this.getIndex(x - 1,y    ,this.size.getX())].visited = true;
                        this.maze[this.getIndex(x - 1,y + 1,this.size.getX())].visited = true;                        
                    }
                    if(this.generatedMaze[i].bottom){
                        this.maze[this.getIndex(x - 1,y + 1,this.size.getX())].visited = true;
                        this.maze[this.getIndex(x    ,y + 1,this.size.getX())].visited = true;
                        this.maze[this.getIndex(x + 1,y + 1,this.size.getX())].visited = true;                        
                    }
                    
                    i++;                    
                }
            }

        }else{
            throw new Error('maze not generated');
        }
    }

    private checkNeighbours(x: number, y: number): number[] {

        var neighbourIndeces: number[] = new Array<number> ();
        var counter = 0;

        var top: Cell = this.getIndex(x, y - 1)>= 0 ? this.generatedMaze[this.getIndex(x, y - 1)] : undefined;
        var bottom: Cell = this.getIndex(x, y + 1)>= 0 ? this.generatedMaze[this.getIndex(x, y + 1)] : undefined;
        var right: Cell = this.getIndex(x + 1, y)>= 0 ? this.generatedMaze[this.getIndex(x + 1, y)] : undefined;
        var left: Cell = this.getIndex(x - 1, y)>= 0 ? this.generatedMaze[this.getIndex(x - 1, y)] : undefined;

        //console.log(this.getIndex(x, y + 1));
        if (typeof top != 'undefined' && !top.visited) {

            neighbourIndeces[counter] = this.getIndex(top.posX, top.posY);
            counter++;

        } 
        if (typeof bottom != 'undefined' && !bottom.visited) {

            neighbourIndeces[counter] = this.getIndex(bottom.posX, bottom.posY);
            counter++;

        } 
        if (typeof left != 'undefined' && !left.visited) {

            neighbourIndeces[counter] = this.getIndex(left.posX, left.posY);
            counter++;

        } 
        if (typeof right != 'undefined' && !right.visited) {

            neighbourIndeces[counter] = this.getIndex(right.posX, right.posY);
            counter++;

        }
        

        //console.log(neighbourIndeces)
        return neighbourIndeces;
    }


    private getIndex(x: number, y: number, width?: number): number {

        var returnVal: number = -2;
        if (x<0 || y<0 || x> this.mazeSize.getX() - 1 || y> this.mazeSize.getY() - 1) {
            returnVal =  -1;
        }

        if(width == undefined){
            returnVal =  y * this.mazeSize.getX() + x;
            if (x<0 || y<0 || x> this.mazeSize.getX() - 1 || y> this.mazeSize.getY() - 1) {
                returnVal =  -1;
            }
        }else{
            returnVal =  y * width + x;
        }

        return returnVal;
    }
    
    /**
     * Determines the total resolution of the maze excluding the tile width and height
     */
    //function to determine the resolution of the maze
    private determineMazeResolution(screenWidth: number, screenHeight: number, cellSize: number): void {
        //WIDTH CALCULATIONS
        if (screenWidth % cellSize != 0) {
            screenWidth = screenWidth - screenWidth % cellSize;
        }
        //innerMaze calculations
        if (((screenWidth / cellSize) / 2) - 1 - Math.floor(((screenWidth / cellSize) / 2) - 1) != 0) {
            screenWidth -= cellSize;
        }

        //HEIGHT CALCULATIONS
        if (screenHeight % cellSize != 0) {
            screenHeight = screenHeight - screenHeight % cellSize;
        }
        //innerMaze calculations
        if (((screenHeight / cellSize) / 2) - 1 - Math.floor(((screenHeight / cellSize) / 2) - 1) != 0) {
            screenHeight -= cellSize;
        }

        //FINAL ASSIGNING
        this.size.setX(screenWidth / cellSize);
        this.size.setY(screenHeight / cellSize);

    }

    public render(ctx: CanvasRenderingContext2D){
        for(var i = 0 ; i< this.generatedMaze.length;i++){
            this.generatedMaze[i].debugRender(ctx,true);
        }
    }
    public completeMazeRender(ctx: CanvasRenderingContext2D){
        for(var i = 0 ; i < this.maze.length;i++){
            this.maze[i].noBoundRender(ctx);
        }
    }
}
