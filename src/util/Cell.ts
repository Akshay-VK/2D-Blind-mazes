import { Canvas } from "../screen/Canvas";
import { Color } from "./Color";
import { Vector } from "./Vector";

export class Cell{
    private position: Vector;
    width: number;
    height: number;
    hasBounds: boolean;
    renderArray: Array<Color>;

    //bounds
    private topBound: boolean;
    private leftBound: boolean;
    private rightBound: boolean;
    private bottomBound: boolean;

    public visited: boolean;

    private color: Color;

    
    constructor(position: Vector, width: number, height: number, hasBounds?: boolean, color?: Color, renderArray?: Array<Color>){
        //sset required params
        this.position = position;
        this.width = width;
        this.height = height;

        this.visited = false;
        //set optional params
        if(typeof hasBounds != 'undefined' && hasBounds){
            //setting bounds
            this.hasBounds = hasBounds;
            this.topBound = true;
            this.leftBound = true;
            this.rightBound = true;
            this.bottomBound = true;

        }
        if(typeof hasBounds == 'undefined' || (hasBounds != undefined && !hasBounds)){
            this.color = new Color(color.getColorVal());
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
    debugRender(ctx: CanvasRenderingContext2D,wire: boolean){
        if(wire){
            //WIREFRAME
            
            //ctx.fillStyle = 'rgba(255,0,0,255)';
            //ctx.fillRect(this.position.getX()*this.width, this.position.getY()*this.height, this.width, this.height);
            ctx.fillStyle = 'rgba(255,255,255,255)';
            var localWidth = 10;
            if(this.leftBound){
                ctx.fillRect(this.position.getX()*localWidth*this.width, this.position.getY()*localWidth*this.height, 3,this.height*localWidth);
            }
            if(this.rightBound){
                ctx.fillRect(this.position.getX()*localWidth*this.width+this.width*localWidth, this.position.getY()*localWidth*this.height, 3,this.height*localWidth);
            }
            if(this.bottomBound){
                ctx.fillRect(this.position.getX()*localWidth*this.width, this.position.getY()*localWidth*this.height+this.height*localWidth , this.width*localWidth,3);
            }
            if(this.topBound){
                ctx.fillRect(this.position.getX()*localWidth*this.width, this.position.getY()*localWidth*this.height, this.width*localWidth,3);
            }
            
        }else{
            console.log('No non-wire debug render implemented');
        }
    }
    noBoundRender(ctx: CanvasRenderingContext2D){
        //console.log('a');
        if(this.color != null){
            //console.log('b');
            ctx.fillStyle = `rgba(${this.color.getColorVal()},${this.color.getColorVal()},${this.color.getColorVal()},${this.color.getColorVal()})`;
            if(this.visited){
                ctx.fillRect(
                    this.position.getX()*this.width * 5,
                    this.position.getY()*this.height * 5,
                    this.width * 5,
                    this.height * 5
                );
            }else{
                //console.log('not visited');
            }
        }
    }

    //GETTERS

    get pos(): Vector{
        return this.position;
    }

    get posX(): number{
        return this.position.getX();        
    }
    get posY(): number{
        return this.position.getY();
    }

    get left(): boolean{
        return this.leftBound;
    }
    get right(): boolean{
        return this.rightBound;
    }
    get top(): boolean{
        return this.topBound;
    }
    get bottom(): boolean{
        return this.bottomBound;
    }
    
}
