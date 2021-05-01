import { Light } from "../util/Light";
import { Vector } from "../util/Vector";
import { Canvas } from "./Canvas";

export class LightSheet{
    private rows: number;
    private columns: number;
    private cellSize: number;

    lights: Light[];
    lightCanvas: Canvas;
    constructor(rows: number, columns: number, cellSize: number){
        this.lightCanvas = new Canvas(rows, columns, cellSize);
        this.rows = rows;
        this.columns = columns;
        this.cellSize = cellSize;

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
        console.log(this.lights);
    }

    //SETTERS
    
}