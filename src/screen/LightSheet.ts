import { Light } from "../util/Light";
import { Vec2 } from "../util/Vectors/Vec2";
import { Canvas } from "./Canvas";
import { Dither } from "./Dither";

export class LightSheet{
    private rows: number;
    private columns: number;
    private cellSize: number;

    public maxDistanceFromLight: number;

    public lightIntensity: number;

    lights: Light[];
    lightCanvases: Canvas[];
    constructor(rows: number, columns: number, cellSize: number, lightIntensity: number){
        this.lightCanvases = Array<Canvas>();
        this.rows = rows;
        this.columns = columns;
        this.cellSize = cellSize;
        this.lightIntensity = lightIntensity

        this.maxDistanceFromLight = Math.sqrt(this.columns*this.columns+this.rows*this.rows);

        this.lights = new Array<Light>();
    }


    //NOT GETTERS OR SETTERS 🤣
    public setLight(vec: Vec2,luminanceValue: number){
        this.lights.push(new Light(vec,luminanceValue));
        this.lightCanvases.push(new Canvas(this.rows, this.columns, this.cellSize,0));
        this.calculateLightEffects();        
        //console.log(this.lightCanvases);
    }

    //----------------------------------------------------------------
    //----------------------------------------------------------------
    //-------------------------Very Important-------------------------
    public calculateLightEffects(){
        //loop through lights
        //get luminance value
        //loop through all canvas pixels...
        // add distance .... stuff:
        //  (lightVal-minLightVal/maxLightVal-minLightVal * (dist / (maxDistVal* lightSize)) * 255
        for(var i = 0; i < this.lights.length;i++){
            var lightLuminanceValue: number = this.lights[i].getLuminanceValue();
            //var minLuminanceValue = this.lights[i].getMinLuminanceValue();
            //var maxLuminanceValue = this.lights[i].getMaxLuminanceValue();
            //var lightPercentage: number = ((lightLuminanceValue)-minLuminanceValue) / (maxLuminanceValue-minLuminanceValue);


            var lightX: number = this.lights[i].posX;
            var lightY: number = this.lights[i].posY;

            for(var y = 0; y < this.rows; y++){
                for(var x = 0; x < this.columns; x++){
                    // the stuff...

                    if(x-lightX < 300 || y-lightY<300){
                        var distanceFromLight: number = Math.sqrt(
                            (lightX-x)*(lightX-x)+
                            (lightY-y)*(lightY-y)
                            );
                        //var distanceOverMaxDistanceFactor: number = distanceFromLight / (this.maxDistanceFromLight*(this.lightIntensity/50));
                        
                        //var finalValue: number = distanceOverMaxDistanceFactor*lightPercentage*255*4;

                        var finalValue: number = distanceFromLight*this.lightIntensity*lightLuminanceValue;
                                            
                        if(finalValue < 0){
                            finalValue = 0;
                        }else if(finalValue > 255){
                            finalValue = 255;
                        }
                        
                        this.lightCanvases[i].setColorVal(x,y,255-finalValue);

                    }else{
                        this.lightCanvases[i].setColorVal(x,y,0);
                        
                    }

                }
            }
        }
    }
    //----------------------------------------------------------------
    //----------------------------------------------------------------

    public ditherAll(ditherer: Dither, ditherLevel: number){
        for(let i = 0; i < this.lightCanvases.length; i++){
            this.lightCanvases[i].setColors(
                ditherer.ditherSingle(this.lightCanvases[i],ditherLevel)
            );
        }
    }

    public render(ctx: CanvasRenderingContext2D){
        for(var i = 0; i < this.lightCanvases.length;i++){
            this.lightCanvases[i].render(ctx);
        }
        this.calculateLightEffects();
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
    public getCanvases(): Canvas[]{
        return this.lightCanvases;
    }

    //SETTERS
    
    public setAllLightLuminanceValues(luminance: number){
        for(var i = 0 ; i < this.lights.length;i++){
            this.lights[i].setLuminanceValue(luminance);
        }
        this.calculateLightEffects();
        //console.log(this.lights.length);
    }
}