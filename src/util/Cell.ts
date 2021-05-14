import { Canvas } from "../screen/Canvas";
import { Color } from "./Color";
import { Vector } from "./Vector";

export class Cell{
    position: Vector;
    width: number;
    height: number;
    hasBounds: boolean;
    renderArray: Array<Color>;

    //bounds
    topBound: boolean;
    leftBound: boolean;
    rightBound: boolean;
    bottomBound: boolean;

    visited: boolean;
    constructor(position: Vector, width: number, height: number, hasBounds?: boolean,renderArray?: Array<Color>){
        //sset required params
        this.position = position;
        this.width = width;
        this.height = height;

        this.visited = false;
        //set optional params
        if(typeof hasBounds != 'undefined'){
            //setting bounds
            this.hasBounds = hasBounds;
            this.topBound = true;
            this.leftBound = true;
            this.rightBound = true;
            this.bottomBound = true;
        }
        if(typeof renderArray != 'undefined'){
            this.renderArray = renderArray;
        }
    }
    updateBound(x: number, y: number, state?: boolean){
        if(typeof state != 'undefined'){
            //STATE SPECIFIED
            if(x == 1 && y == 0){
                //RIGHT
                this.rightBound = state;
            }else if(x == -1 && y == 0){
                //LEFT
                this.leftBound = state;
            }else if(x == 0 && y == -1){
                //UP
                this.topBound = state;
            }
            else if(x == 0 && y == 1){
                //DOWN
                this.bottomBound = state;
            }else{
                console.log('Error: Invalid bound vector specified.');

            }
        }else{
            //STATE UNSPECIFIED
            if(x == 1 && y == 0){
                //RIGHT
                this.rightBound = !this.rightBound;
            }else if(x == -1 && y == 0){
                //LEFT
                this.leftBound = !this.leftBound;
            }else if(x == 0 && y == -1){
                //UP
                this.topBound = !this.topBound;
            }
            else if(x == 0 && y == 1){
                //DOWN
                this.bottomBound = !this.bottomBound;
            }else{
                console.log('Error: Invalid bound vector specified.');

            }
        }
    }
    render(canvas: Canvas){
        //checking if the renderArray was specified
        if(typeof this.renderArray != 'undefined'){
            for(var y = 0; y < this.height; y++){
                for(var x = 0; x < this.width;x++){
                    //calling the method ....this part is a bit tricky
                    canvas.setColor(this.position.getX(),this.position.getX(),this.renderArray[y*this.width+x]);
                }
            }
        }else{
            for(var y = 0; y < this.height; y++){
                for(var x = 0; x < this.width;x++){
                    //just setting the value
                    canvas.setColorVal(this.position.getX(),this.position.getX(),127);
                }
            }
        }
    }
    debugRender(ctx: CanvasRenderingContext2D,wire?: boolean){
        if(typeof wire != 'undefined'){
            //WIREFRAME
            
            ctx.fillStyle = 'purple';
            ctx.fillRect(this.position.getX(), this.position.getY(), this.width, this.height);
            ctx.fillStyle = 'white'
            if(this.leftBound){
                ctx.fillRect(this.position.getX(), this.position.getY(), 3,this.height);
            }
            if(this.rightBound){
                ctx.fillRect(this.position.getX()+this.width, this.position.getY(), 3,this.height);
            }
            if(this.bottomBound){
                ctx.fillRect(this.position.getX(), this.position.getY()+this.height , this.width,3);
            }
            if(this.topBound){
                ctx.fillRect(this.position.getX(), this.position.getY(), this.width,3);
            }
            
        }
    }
}
