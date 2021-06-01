import { Dim2 } from "../util/Vectors/Dim2";

export class AABB{
    private dim: Dim2;
    constructor(dim: Dim2){
	this.dim = dim;
    }
    public collides(dim: Dim2): boolean{
	if(this.dim.x > dim.x && this.dim.y > dim.y && this.dim.x < dim.x+dim.width && this.dim.y < dim.y+dim.height){
	    return true; 
	}else if(dim.x > this.dim.x && dim.y > this.dim.y && dim.x < this.dim.x+this.dim.width && dim.y < this.dim.y+this.dim.height){
	    return true;
	}else{
	    return false;
	}
    }
    public arrayCollidesCheck(dims: Dim2[]): boolean{
	var res = false;
	for(var i = 0; i < dims.length; i++){
	    res = this.collides(dims[i]) ? true : false;
	}
	return res;
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
