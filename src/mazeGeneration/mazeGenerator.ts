import { Cell } from "../util/Cell";

export class mazeGenerator{
    maze: Array<Cell>;
    generatedMaze: Array<Cell>;
    size:number;
    cellSize:number;
    constructor(screenWidth: number,screenHeight: number, cellSize: number){
        this.cellSize = cellSize;

        this.determineMazeResolution(screenWidth,screenHeight,cellSize);
        console.log(screenWidth,screenHeight,this.size);

        this.maze = new Array<Cell>(this.size*this.size);
        
        this.generatedMaze = new Array<Cell>((this.size-1)/2);
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
        //determining main resolution
        if(screenHeight >= screenWidth){
            this.size = screenWidth;
        }else{
            this.size = screenHeight;
        }

        // //checkingif innermaze is possible
        // var tester: number = (this.size-1)/2;
        // if(tester - Math.floor(tester) != 0){
        //     //decimal place
        //     this.size -= 1;
        // }

        // //making sure size is divisible by cellSize
        // if(this.size % cellSize != 0){
        //     this.size -= this.size%cellSize;
        // }
        while((this.size-1)/2 - Math.floor((this.size-1)/2) != 0 && this.size % cellSize != 0 && this.size > 0){
            this.size--;
            if(this.size == 0){
                console.log('00000000000');
            }
        }


        this.size /= cellSize;
    }
}