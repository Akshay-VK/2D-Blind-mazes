import { Vector } from "./Vector";

export class Light{
    private position: Vector;
    private luminanceValue: number;
    private maxLuminanceValue: number;
    private minLuminanceValue: number;
    
    constructor(position: Vector, luminanceValue: number){
        this.position = position;
        this.minLuminanceValue = 0;
        this.maxLuminanceValue = 10;

        if(luminanceValue >= this.minLuminanceValue && luminanceValue <= this.maxLuminanceValue){
            this.luminanceValue = luminanceValue;
        }else{
            throw new Error("Invalid light luminance value specified.");
        }
    }

    //GETTERS

    //POSITIONS
    public getPosition(): Vector{
        return this.position;
    }
    public getPositionX(): number{
        return this.position.getX();
    }
    public getPositionY(): number{
        return this.position.getY();
    }    
    public getLuminanceValue(): number{
        return this.luminanceValue;
    }

    public getMinLuminanceValue(): number{
        return this.minLuminanceValue;
    }
    public getMaxLuminanceValue(): number{
        return this.maxLuminanceValue;
    }
    get posX(): number{
        return this.position.getX();
    }
    get posY(): number{
        return this.position.getY();
    }
    

    //SETTERS
    public setPosition(vec: Vector){
        this.position.setX(vec.getX());
        this.position.setY(vec.getY());        
    }
    public setPositionX(x: number){
        this.position.setX(x);
    }
    public setPositionY(y: number){
        this.position.setY(y);
    }
    public setLuminanceValue(val: number){
        if(val >= 0 && val <= 10){
            this.luminanceValue = val;
        }else{
            throw new Error("Invalid light luminance value specified while setting: "+ val);
        }
    }
}