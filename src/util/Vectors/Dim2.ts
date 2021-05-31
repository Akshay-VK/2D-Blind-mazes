import { Vec2 } from "./Vec2";

export class Dim2{
    private pos: Vec2;
    private size: Vec2;
    private velocity: Vec2;
    constructor(pos: Vec2, width: number, height: number, vel?: Vec2){
	this.pos = pos;
	this.size = new Vec2(width, height);
	if(vel != undefined){
	    this.velocity = vel;
	}else{
	    this.velocity = new Vec2(0, 0);
	}
    }


    public update(){
	this.pos.add(this.velocity);	
    }

    get x(){
	return this.pos.getX();
    }
    get y(){
	return this.pos.getY();
    }
    get width(){
	return this.size.getX();
    }
    get height(){
	return this.size.getY();
    }
    public setPos(pos: Vec2){
	this.pos.setX(pos.getX());
	this.pos.setY(pos.getY());
    }

}
