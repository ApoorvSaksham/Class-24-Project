class Sphere{
    constructor(x,y,r){
var options={
    'restitution': 0.5,
    'friction':1,
    'density':8
}
this.body = Bodies.circle(x,y,35);
this.r = 70;
World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("lightgreen");
    fill("green")
    ellipse(0,0,this.r,this.r);
    pop()
}
}