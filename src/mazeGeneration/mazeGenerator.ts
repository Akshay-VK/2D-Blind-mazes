import {
    Cell
} from "../util/Cell";
import {
    Vector
} from "../util/Vector";

export class mazeGenerator {
    maze: Array<Cell> ;
    generatedMaze: Array<Cell> ;
    size: Vector;
    mazeSize: Vector;
    cellSize: number;
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
    }


    generateMaze(): void {
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

        var stack: number[] = new Array<number> ();

        //Choose the initial cell, mark it as visited and push it to the stack
        var currentCell: number =0;      

        this.generatedMaze[currentCell].visited = true;

        stack.push(0);

        //While the stack is not empty
        while (stack.length != 0) {
            //Pop a cell from the stack and mark it as current cell
            
            currentCell = stack.pop();

            var currentCellNeighbours: number[] = this.checkNeighbours(this.generatedMaze[currentCell].posX, this.generatedMaze[currentCell].posY);
            //If the current cell has any neighbours which have not been visited
            if (currentCellNeighbours.length != 0) {
                stack.push(currentCell);

                //choose a random one
                var chosenOneIndex: number = Math.floor(Math.random() * currentCellNeighbours.length);
                var chosenOne: number = currentCellNeighbours[chosenOneIndex];

                //REMOVING WALLS

                //right
                if (this.generatedMaze[chosenOne].posX> this.generatedMaze[currentCell].posX) {
                    this.generatedMaze[chosenOne].updateBound(-1, 0);
                    this.generatedMaze[currentCell].updateBound(1, 0);
                }
                //left
                if (this.generatedMaze[chosenOne].posX<this.generatedMaze[currentCell].posX) {
                    this.generatedMaze[chosenOne].updateBound(1, 0);
                    this.generatedMaze[currentCell].updateBound(-1, 0);
                }
                //up
                if (this.generatedMaze[chosenOne].posY<this.generatedMaze[currentCell].posY) {
                    this.generatedMaze[chosenOne].updateBound(0, 1);
                    this.generatedMaze[currentCell].updateBound(0, -1);
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
        
        console.log(this.generatedMaze)
    }

    private checkNeighbours(x: number, y: number): number[] {

        var neighbourIndeces: number[] = new Array<number> ();

        var top: Cell = this.getIndex(x, y - 1)>= 0 ? this.generatedMaze[this.getIndex(x, y - 1)] : undefined;
        var bottom: Cell = this.getIndex(x, y + 1)>= 0 ? this.generatedMaze[this.getIndex(x, y + 1)] : undefined;
        var right: Cell = this.getIndex(x + 1, y)>= 0 ? this.generatedMaze[this.getIndex(x + 1, y)] : undefined;
        var left: Cell = this.getIndex(x - 1, y)>= 0 ? this.generatedMaze[this.getIndex(x - 1, y)] : undefined;

        if (typeof top != 'undefined' && !top.visited) {

            neighbourIndeces.push(this.getIndex(top.posX, top.posY));

        } else if (typeof bottom != 'undefined' && !bottom.visited) {

            neighbourIndeces.push(this.getIndex(bottom.posX, bottom.posY));

        } else if (typeof left != 'undefined' && !left.visited) {

            neighbourIndeces.push(this.getIndex(left.posX, left.posY));

        } else if (typeof right != 'undefined' && !right.visited) {

            neighbourIndeces.push(this.getIndex(right.posX, right.posY));

        }

        return neighbourIndeces;
    }


    getIndex(x: number, y: number): number {

        if (x<0 || y<0 || x> this.mazeSize.getX() - 1 || y> this.mazeSize.getY() - 1) {
            return -1;
        }

        return y * this.mazeSize.getX() + x;
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
}
