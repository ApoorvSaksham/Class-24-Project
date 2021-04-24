class Hammer{
  constructor(x,y){
    var options={
      'density':4,
      'friction': 1.0,
      'restitution':0.5
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 180;
    this.height = 155;
    this.image = loadImage("hammer.png");
    World.add(world, this.body);
    
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    push()
    translate(pos.x,pos.y);
    imageMode(CENTER);
    rotate(angle);
    image(this.image,0,0,this.width,this.height);
    pop()

  }
}