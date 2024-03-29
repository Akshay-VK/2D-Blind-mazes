import { BWImage } from "../util/BWImage";
import { BWAnimation } from "../util/BWAnimation"

export class Loader{
    constructor(){

    }
    get rightWalkSpriteSheet(): BWAnimation{
        var image1: BWImage = new BWImage(10, 10, [
            0, 0 , 0  , 0  , 0  , 0  , 0  , 0, 0, 0, 
            0, 0 , 0  , 0  , 0  , 0  , 0  , 0, 0, 0, 
            0, 0 , 250, 250, 250, 250, 250, 0, 0, 0,
            0, 0 , 250, 250, 250, 0  , 250, 0, 0, 0,
            0, 0 , 250, 250, 250, 0  , 250, 0, 0, 0,
            0, 0 , 250, 250, 250, 250, 250, 0, 0, 0,
            0, 57, 49 , 164, 164, 164, 0  , 0, 0, 0,
            0, 57, 57 , 250, 250, 250, 250, 0, 0, 0,
            0, 57, 164, 164, 0  , 250, 250, 0, 0, 0,
            0, 0 , 164, 164, 0  , 250, 250, 0, 0, 0
        ]);
        var image2: BWImage = new BWImage(10, 10, [
            0, 0 , 0  , 0  , 0  , 0  , 0  , 0, 0, 0,
            0, 0 , 250, 250, 250, 250, 250, 0, 0, 0,
            0, 0 , 250, 250, 250, 0  , 250, 0, 0, 0,
            0, 0 , 250, 250, 250, 0  , 250, 0, 0, 0,
            0, 0 , 250, 250, 250, 250, 250, 0, 0, 0, 
            0, 57, 49 , 164, 164, 164, 0  , 0, 0, 0,
            0, 57, 57 , 250, 250, 250, 0  , 0, 0, 0,
            0, 57, 164, 164, 250, 250, 250, 0, 0, 0,
            0, 0 , 164, 164, 164, 250, 250, 0, 0, 0,
            0, 0 , 0  , 0  , 0  , 250, 250, 0, 0, 0
        ]);
	var image3: BWImage = new BWImage(10, 10, [
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0,57, 49 , 164, 164, 164, 0  , 0, 0, 0,
	    0,57, 57 , 250, 250, 250, 0  , 0, 0, 0,
	    0,57, 57 , 250, 250, 250, 0  , 0, 0, 0,
	    0, 0, 164, 164, 250, 250, 0  , 0, 0, 0,
	    0, 0, 164, 164, 250, 250, 0  , 0, 0, 0,
	    0, 0, 0  , 0  , 250, 250, 0  , 0, 0, 0
	]);
	var image4: BWImage = new BWImage(10, 10, [
	    0, 0, 0  , 0  , 0  , 0  , 0  , 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0,57, 49 , 164, 164, 164, 0  , 0, 0, 0,
	    0,57, 57 , 250, 250, 250, 0  , 0, 0, 0,
	    0,57, 164, 250, 250, 164, 0  , 0, 0, 0,
	    0, 0, 164, 250, 250, 164, 0  , 0, 0, 0,
	    0, 0, 0  , 250, 250, 0  , 0  , 0, 0, 0
	]);
	var image5: BWImage = new BWImage(10, 10, [
	    0, 0, 0  , 0  , 0  , 0  , 0  , 0, 0, 0,
	    0, 0, 0  , 0  , 0  , 0  , 0  , 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0,57, 49 , 164, 164, 164, 0  , 0, 0, 0,
	    0,57, 57 , 250, 250, 250, 164, 0, 0, 0,
	    0,57, 250, 250, 0  , 164, 164, 0, 0, 0,
	    0, 0, 250, 250, 0  , 164, 164, 0, 0, 0
	]);
	var image6: BWImage = new BWImage(10, 10, [
	    0, 0, 0  , 0  , 0  , 0  , 0  , 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0,57, 49 , 164, 164, 164, 0  , 0, 0, 0,
	    0,57, 57 , 164, 164, 164, 0  , 0, 0, 0,
	    0,57, 250, 250, 250, 250, 164, 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 164, 0, 0, 0,
	    0, 0, 0  , 0  , 0  , 164, 164, 0, 0, 0
	]);
	var image7: BWImage = new BWImage(10, 10, [
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
	    0,57, 49 , 164, 164, 164, 0  , 0, 0, 0,
	    0,57, 57 , 250, 250, 250, 0  , 0, 0, 0,
	    0,57, 57 , 250, 250, 250, 0  , 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 0  , 0, 0, 0,
	    0, 0, 250, 250, 250, 250, 0  , 0, 0, 0,
	    0, 0, 0  , 0  , 164, 164, 0  , 0, 0, 0
	]);
	var image8: BWImage = new BWImage(10, 10, [
            0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
            0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
            0, 0, 250, 250, 250, 0  , 250, 0, 0, 0,
            0, 0, 250, 250, 250, 250, 250, 0, 0, 0,
            0,57, 49 , 164, 164, 164, 0  , 0, 0, 0,
            0,57, 57 , 250, 250, 250, 0  , 0, 0, 0,
            0,57, 57 , 250, 250, 250, 0  , 0, 0, 0,
            0, 0, 250, 250, 250, 250, 0  , 0, 0, 0,
            0, 0, 250, 250, 250, 250, 0  , 0, 0, 0,
            0, 0, 0  , 164, 164, 0  , 0  , 0, 0, 0
        ]);

        return new BWAnimation(8 , 10 , 10 ,[image1, image2, image3, image4, image5, image6, image7, image8]);
    }
    
}
