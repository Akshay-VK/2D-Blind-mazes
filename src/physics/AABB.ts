import { Dim2 } from "../util/Vectors/Dim2";

export class AABB{
    private dim: Dim2;
    constructor(dim: Dim2){
	this.dim = dim;
    }
    public collides(dim: Dim2): boolean{
	return true;
    }

    get x(): number{
	return this.dim.x;
    }
    get y(): number{
	return this.dim.y;
    }
    get width(): number{
	return this.dim.width;
    }
    get height(): number{
	return this.dim.height;
    }
}
