import { Dim2 } from "../util/Vectors/Dim2";
import { BWAnimation } from "../util/BWAnimation";
import { Canvas } from "../screen/Canvas";
import { GameObject } from "./GameObject";

export class Sprite implements GameObject{
 dimensions: Dim2;
 renderImage: BWAnimation;
 constructor (dim: Dim2, renderImage: BWAnimation){
   this.dimensions = dim;
   this.renderImage = renderImage;
 }
 update(): void{
   
 };
 render(ctx: CanvasRenderingContext2D, frame: number, unitSize): void{
   this.renderImage.renderFrame(ctx, frame, unitSize);
 };
 applyToCanvas(cnv: Canvas): Canvas{
   return undefined;
 };
 //_____________GETTERS_____________
 get Dimensions(): Dim2{
   return this.dimensions;
 }
 get RenderImage(): BWAnimation{
   return this.renderImage;
 }
}