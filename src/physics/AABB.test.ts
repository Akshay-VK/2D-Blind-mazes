import { Dim2 } from "../util/Vectors/Dim2";
import { AABB } from "./AABB";
import { Vec2 } from "../util/Vectors/Vec2";

test('Testing AABB collisions for 2 colliding objecs..', () => {
    var firstVec: Vec2 = new Vec2(10,10);
    var secVec: Vec2 = new Vec2(15,15);

    var firstDim: Dim2 = new Dim2(firstVec, 10, 10);
    var secDim: Dim2 = new Dim2(secVec, 10, 10);
    
    var aabb: AABB = new AABB();

    expect(aabb.collides(firstDim, secDim)).toBe(true);
});
test('Testing AABB collisions for 2 objecs which are not colliding..', () => {
  var firstVec: Vec2 = new Vec2(10, 10);
  var secVec: Vec2 = new Vec2(20, 15);

  var firstDim: Dim2 = new Dim2(firstVec, 10, 10);
  var secDim: Dim2 = new Dim2(secVec, 10, 10);

  var aabb: AABB = new AABB();

  expect(aabb.collides(firstDim, secDim)).toBe(true);
});
test('Testing AABB collisions for an array of objects with a object..', () => {
    var firstVec: Vec2 = new Vec2(10,10);
    var secVec: Vec2 = new Vec2(20,15);
    var thirdVec: Vec2 = new Vec2(15,15);

    var firstDim: Dim2 = new Dim2(firstVec, 10, 10);
    var secDim: Dim2 = new Dim2(secVec, 10, 10);
    var thirdDim: Dim2 = new Dim2(thirdVec, 10,10);
    
    var aabb: AABB = new AABB();

    expect(aabb.collides(firstDim, [secDim, thirdDim])).toBe(true);
});
test('Testing AABB collisions for an array of non-colliding objects with a object..', () => {
    var firstVec: Vec2 = new Vec2(10,10);
    var secVec: Vec2 = new Vec2(20,15);
    var thirdVec: Vec2 = new Vec2(15,20);

    var firstDim: Dim2 = new Dim2(firstVec, 10, 10);
    var secDim: Dim2 = new Dim2(secVec, 10, 10);
    var thirdDim: Dim2 = new Dim2(thirdVec, 10,10);
    
    var aabb: AABB = new AABB();

    expect(aabb.collides(firstDim, [secDim, thirdDim])).toBe(true);
});