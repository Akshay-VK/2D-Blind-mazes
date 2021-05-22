import { Vec2 } from "./Vectors/Vec2";

export class BWImage{
    
    private dimensions: Vec2;
    private image: number[];

    constructor(width: number, height: number, image?: number[]){
        //assigning variables
        this.dimensions = new Vec2(width,height);
        this.image = new Array<number>(width*height);

        if(image != undefined){
            //array size check
            if(image.length == this.image.length){
                //setting values
                image.forEach((val: number, index: number)=>{
                    //making sure to clamp it
                    this.image[index] = this.clamp(val);
                });
            }else{
                throw new Error('Image dimensions do not match that specified in constructor');
            }
        }else{
            for(var i = 0; i < this.image.length;i++){
                this.image[i] = 0;
            }
        }
    }

    private clamp(val: number): number{
        if(val < 0){
            return 0;
        }else if(val > 255){
            return 255;
        }else{
            return val;
        }
    }

    render(ctx: CanvasRenderingContext2D,unitSize: number, alpha?: number): void{        
        for(var y = 0 ; y < this.dimensions.getY(); y++){
            for(var x = 0; x < this.dimensions.getX(); x++){
                var index: number = this.index(x,y);

                if(alpha != undefined){
                    //with alpha
                    ctx.fillStyle = `rgba(${this.image[index]},${this.image[index]},${this.image[index]},${this.clamp(alpha)/255})`;
                }else{
                    //without alpha
                    ctx.fillStyle = `rgba(${this.image[index]},${this.image[index]},${this.image[index]},1})`;
                }

                ctx.fillRect(x * unitSize, y * unitSize, unitSize, unitSize);
            }
        }
    }

    //SETTERS
    public setImage(img: number[]): void{
        if(img.length == this.image.length){
            //setting values
            img.forEach((val: number, index: number)=>{
                //making sure to clamp it
                this.image[index] = this.clamp(val);
            });
        }else{
            throw new Error('Image dimensions do not match that specified in constructor');
        }
    }

    private index(x: number, y : number): number{
        return y * this.dimensions.getY() + x;
    }

    //GETTERS
    public get dim(): Vec2{
        return this.dimensions;
    }
    public get width(): number{
        return this.dimensions.getX();
    }
    public get height(): number{
        return this.dimensions.getY();
    }
    public get img(): number[]{
        return this.image;
    }   
    
    public getPixelVal(x: number,y: number){
        var index = this.index(x,y);
        if(index >= 0 && index < this.image.length){
            return this.image[index];
        }else{
            throw new Error('Invalid image pixel index query');
        }
    }
}