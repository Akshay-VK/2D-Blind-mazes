import { Dim2 } from "../util/Vectors/Dim2";
import { BWAnimation } from "../util/BWAnimation";
import { Canvas } from "../screen/Canvas";
import { GameObject } from "./GameObjcet";

export class Sprite implements GameObject{
 private dimensions: Dim2;
 private renderImage: BWAnimation;
 constructor (dim: Dim2, renderImage: BWAnimation){
   this.dimensions = dim;
   this.renderImage = renderImage;
 }
 update(): void{
   
 };
 render(ctx: CanvasRenderingContext2D): void{
   
 };
 applyToCanvas(cnv: Canvas): Canvas{
   return undefined;
 };
 //_____________GETTERS_____________
 get Dimensions(){
   return this.dimensions;
 }
 get RenderImage(){
   return this.renderImage;
 }
}