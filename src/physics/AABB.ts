import { Dim2 } from "../util/Vectors/Dim2";

export class AABB{
    constructor(){

    }
    public collides(dimA: Dim2, dimB: Dim2): boolean{
	if(dimB.x > dimA.x && dimB.y > dimA.y && dimB.x < dimA.x+dimA.width && dimB.y < dimA.y+dimA.height){
	    return true; 
	}else if(dimA.x > dimB.x && dimA.y > dimB.y && dimA.x < dimB.x+dimB.width && dimA.y < dimB.y+dimB.height){
	    return true;
	}else{
	    return false;
	}
    }
    public arrayCollidesCheck(dimA: Dim2,dims: Dim2[]): boolean{
	var res = false;
	for(var i = 0; i < dims.length; i++){
	    res = this.collides(dimA, dims[i]) ? true : res;
	}
	return res;
    }
}
