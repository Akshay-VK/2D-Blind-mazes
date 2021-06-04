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

    get GameObjects(): GameObject[]{
	return this.gameObjects;
    }
    get GameObjectGroups(): GameObjectGroup[]{
	return this.gameObjectGroups;
    }
}
