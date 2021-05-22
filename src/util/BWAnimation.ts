import { isJSDocThisTag } from "../../node_modules/typescript/lib/typescript";
import { BWImage } from "./BWImage";
import { Vec3 } from "./Vectors/Vec3";

export class BWAnimation{
    private dimensions: Vec3;
    private images: BWImage[];

    constructor(frames: number, width: number, height: number, images?: BWImage[]) {
        this.dimensions = new Vec3(width, height, frames);
        this.images = new Array<BWImage>(frames);

        if(images != undefined){
            if(this.doesFrameExist(images.length)){
                images.forEach((val: BWImage, i: number) => {
                    this.images[i] = new BWImage(width, height, val.img);
                })
            }
        }
    }
    
    public setImage(img: BWImage, index: number){
        if(this.doesFrameExist(index)){
            this.images[index].setImage(img.img);
        }
    }

    public renderFrame(ctx: CanvasRenderingContext2D, frame: number, unitSize: number){        
        if(this.doesFrameExist(frame)){
            this.images[frame].render(ctx, unitSize);
        }
    }

    private doesFrameExist(index: number): boolean{
        if(index > 0 && index < this.dimensions.getZ()){
            return true;
        }else{
            throw new Error('Array length does not match with specified animation frames');
        }
    }
    

    //GETTERS

    public getFrame(frame: number, arrayFormat?: boolean): BWImage | number[]{
        if(this.doesFrameExist(frame)){
            if(arrayFormat != undefined && arrayFormat){
                return this.images[frame].img;
            }
            return this.images[frame];
        }
    }

    public get frames(): number{
        return this.dimensions.getZ();
    }
    public get width(): number{
        return this.dimensions.getX();
    }
    public get height(): number{
        return this.dimensions.getY();
    }
    public get dimension(): Vec3{
        return this.dimensions;
    }
}