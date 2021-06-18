import { Dim2 } from "../util/Vectors/Dim2";
import { BWAnimation } from "../util/BWAnimation";
import { Canvas } from "../screen/Canvas";
import { GameObject } from "./GameObject";

export class GameObjectGroup{
  private items: GameObject[];
  constructor(){
    this.items = new Array<GameObject>();
  }
  public getItem(i: number): GameObject{
    if(this.itemExists(i)){
      return this.items[i];
    }else{
      return new Error("Get item call index in GameObjectGroup exceeds items length");
    }
  }

  public update(){
    for(var i = 0; i < this.items.length; i++){
      this.items[i].update();
    }
  }
  public render(ctx: CanvasRenderingContext2D){
    for(var i = 0; i < this.items.length; i++){
      this.items[i].render(ctx);
    }
  }

  public add(item: GameObject): void{
    this.items.push(item);
  }

  private itemExists(i: number): boolean{
    if(i >= 0 && i < this.items.length){
      return true;
    }else{
      return false;
    }
  }
}
