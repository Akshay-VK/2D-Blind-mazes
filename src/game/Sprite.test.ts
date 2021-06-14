import { Sprite } from "./Sprite";
import { AABB } from "../physics/AABB";
import { Vec2 } from "../util/Vectors/Vec2";
import { Dim2 } from "../util/Vectors/Dim2";
import { Loader } from "../organizedCode/Loader";

test('Testing Sprite renderImage', ()=>{
  var aabb = new AABB();
  var loader = new Loader();
  var spriteA = new Sprite(
    new Dim2(
      new Vec2(10, 10),
      10,
      10
    ),
    loader.rightWalkSpriteSheet
  );
  expect(spriteA.RenderImage).toEqual(loader.rightWalkSpriteSheet);
});
test('Testing Sprite dimensions and collisions',()=>{
  var aabb = new AABB();
  var loader = new Loader();
  var spriteA = new Sprite(
    new Dim2(
      new Vec2(10,10),
      10,
      10
    ),
    loader.rightWalkSpriteSheet 
  );
  expect(spriteA.Dimensions).toEqual(new Dim2(
      new Vec2(10, 10),
      10,
      10
    ));
});
