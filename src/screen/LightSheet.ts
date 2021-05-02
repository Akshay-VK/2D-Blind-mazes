import { Light } from "../util/Light";
import { Vector } from "../util/Vector";
import { Canvas } from "./Canvas";

export class LightSheet{
    private rows: number;
    private columns: number;
    private cellSize: number;

    public maxDistanceFromLight: number;

    public lightIntensity: number;

    lights: Light[];
    lightCanvas: Canvas;
    constructor(rows: number, columns: number, cellSize: number, lightIntensity: number){
        this.lightCanvas = new Canvas(rows, columns, cellSize, true);
        this.rows = rows;
        this.columns = columns;
        this.cellSize = cellSize;
        this.lightIntensity = lightIntensity

        this.maxDistanceFromLight = Math.sqrt(this.columns*this.columns+this.rows*this.rows);

        this.lights = new Array<Light>();
    }

    //GETTERS
    public getRows(): number{
        return this.rows;        
    }
    public getColumns(): number{
        return this.columns;
    }
    public getCellSize(): number{
        return  this.cellSize;
    }

    //NOT GETTERS OR SETTERS 🤣
    public setLight(vec: Vector,luminanceValue: number){
        this.lights.push(new Light(vec,luminanceValue));
        this.calculateLightEffects();        
        console.log(this.lightCanvas);
    }

    //----------------------------------------------------------------
    //----------------------------------------------------------------
    //-------------------------Very Important-------------------------
    public calculateLightEffects(){
        //loop through lights
        //get luminance value
        //loop through all canvas pixels...
        // add distance .... stuff
        for(var i = 0; i < this.lights.length;i++){
            var lightLuminanceValue: number = this.lights[i].getLuminanceValue();
            var minLuminanceValue = this.lights[i].getMinLuminanceValue();
            var maxLuminanceValue = this.lights[i].getMaxLuminanceValue();
            var lightPercentage: number = (maxLuminanceValue+lightLuminanceValue-minLuminanceValue) / ((maxLuminanceValue-minLuminanceValue));


            var lightX: number = this.lights[i].getPositionX();
            var lightY: number = this.lights[i].getPositionY();
            for(var y = 0; y < this.rows; y++){
                for(var x = 0; x < this.columns; x++){
                    // the stuff...
                    var distanceFromLight: number = Math.sqrt(
                        (x-lightX)*(x-lightX)+
                        (y-lightY)*(y-lightY)
                        );
                    var distanceOverMaxDistanceFactor: number = distanceFromLight / (this.maxDistanceFromLight*.25);
                    var finalValue: number = this.lightCanvas.getColorVal(x,y)+(this.lightIntensity*distanceOverMaxDistanceFactor*lightPercentage*255);
                    
                    if(finalValue < 0){
                        finalValue = 0;
                    }else if(finalValue > 255){
                        finalValue = 255;
                    }
                    this.lightCanvas.setColorVal(x,y,finalValue);
                }
            }
        }
    }
    //----------------------------------------------------------------
    //----------------------------------------------------------------

    public switchLast(vec: Vector, luminance: number){
        this.lights.unshift(new Light(vec,luminance));
        this.lights.pop();
        this.calculateLightEffects();
        console.log(this.lights.length);
    }

    public render(ctx: CanvasRenderingContext2D){
        this.lightCanvas.render(ctx,true);
    }

    //SETTERS
    
}