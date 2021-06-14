import { GameObject } from "./GameObject";
import { GameObjectGroup } from "./GameObjectGroup";

export class Handler{
    gameObjects: GameObject[];
    gameObjectGroups: GameObjectGroup[];
    constructor(){
	this.gameObjects = new Array<GameObject>();
	this.gameObjectGroups = new Array<GameObjectGroup>();

    }
    public appendGameObject(obj: GameObject): void{
	this.gameObjects.push(obj);
    }
    public appendGameObjectGroup(grp: GameObjectGroup): void{
	this.gameObjectGroups.push(grp);
    }
    public getGameObject(i: number): GameObject{
    	if(this.exists(gameObjects,i)){
		return gameObjects[i];
	}else{
		throw new Error(`GameObject query of index ${i} does not exist.`);
	}
    }

    private exists(arr: GameObject[] | GameObjectGroup[], i: number): boolean{
    	return i >= 0 && i < arr.length;
    }

    get GameObjects(): GameObject[]{
	return this.gameObjects;
    }
    get GameObjectGroups(): GameObjectGroup[]{
	return this.gameObjectGroups;
    }
}
