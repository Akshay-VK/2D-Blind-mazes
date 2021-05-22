//Vector class for ease of calcuations in the future 😎
export class Vec3 {
    private x: number;
    private y: number;
    private z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    //simple add, subtract, multiply and division methods

    //➕
    public add(vec: Vec3): void {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
    }

    //➖
    public sub(vec: Vec3): void {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
    }

    //✖
    public mul(vec: Vec3): void {
        this.x *= vec.x;
        this.y *= vec.y;
        this.z *= vec.z;
    }

    //➗
    public div(vec: Vec3): void {
        this.x /= vec.x;
        this.y /= vec.y;
        this.z /= vec.z;
    }

    //getters
    public getX(): number {
        return this.x;
    }
    public getY(): number {
        return this.y;
    }
    public getZ(): number{
        return this.z;
    }

    //setters
    public setX(x: number): void {
        this.x = x;
    }
    public setY(y: number): void {
        this.y = y;
    }
    public setZ(z: number): void{
        this.z = z;
    }

}