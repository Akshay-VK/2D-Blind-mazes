//Vector class for ease of calcuations in the future 😎
export class Vec2{
  private x: number;
  private y: number;

  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }
  //simple add, subtract, multiply and division methods

  //➕
  public add(vec: Vec2): void{
    this.x += vec.x;
    this.y += vec.y;

  }

  //➖
  public sub(vec: Vec2): void{
    this.x -= vec.x;
    this.y -= vec.y;
  }

  //✖
  public mul(vec: Vec2): void{
    this.x *= vec.x;
    this.y *= vec.y;
  }

  //➗
  public div(vec: Vec2): void{
    this.x /= vec.x;
    this.y /= vec.y;
  }

  //getters
  public getX(): number{
    return this.x;
  }
  public getY(): number{
    return this.y;
  }

  //setters
  public setX(x: number): void{
    this.x = x;
  }
  public setY(y: number): void{
    this.y = y;
  }
  
}
