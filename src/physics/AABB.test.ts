import { Dim2 } from "../util/Vectors/Dim2";
import { AABB } from "./AABB";
import { Vec2 } from "../util/Vectors/Vec2";

test('Testing AABB collisions..', () => {
    var firstVec: Vec2 = new Vec2(10,10);
    var secVec: Vec2 = new Vec2(15,15);

    var firstDim: Dim2 = new Dim2(firstVec, 10, 10);
    var secDim: Dim2 = new Dim2(secVec, 10, 10);
    
    var aabb: AABB = new AABB();

    expect(aabb.collides(firstDim, secDim)).toBe(true);
});
