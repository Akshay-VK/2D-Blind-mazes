import { Vector } from "./Vector";

export class Light{
    private position: Vector;
    private luminanceValue: number;
    constructor(position: Vector, luminanceValue: number){
        this.position = position;

        if(luminanceValue >= 0 && luminanceValue <= 10){
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
            throw new Error("Invalid light luminance value specified while setting.");
        }
    }
}