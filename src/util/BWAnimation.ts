import { Vec2 } from "./Vec2";

export class BWAnimation{
    private frames: number;
    private dimensions: Vec2
    constructor(frames: number, width: number, height: number) {
        this.frames = frames;
        this.dimensions = new Vec2(width, height);
    }

    //GETTERS
    public get numFrames(): number{
        return this.frames;
    }
    public get width(): number{
        return this.dimensions.getX();
    }
    public get height(): number{
        return this.dimensions.getY();
    }
    public get dimension(): Vec2{
        return this.dimensions;
    }
}