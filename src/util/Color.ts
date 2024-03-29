//the color class
export class Color{
    private color: number;
    constructor(color?: number){
        //chacking if the value specified is within the color range
        if(color >= 0 && color <= 255){
            this.color = color;
        }
        else{
            console.log("Color value specified exceeds bounds.");
        }
    }
    //get the VALUE of the color
    public getColorVal(): number{
        return this.color;
    } 

    //get the color OBJECT
    public getColor(): Color{
        return this;
    }

    //there is only a color VALUE setter method as I dont think u can change the object itself.. -\_(^v^)_/-
    public setColorVal(val: number): void{
        this.color = val;
    }
}