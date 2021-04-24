class Stone{
    constructor(x,y){
        var options={
            'restitution' : 0.8,
            'friction':1,
            'density' : 12
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 70;
        this.height = 66;
        World.add(world,this.body);
  
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("grey");
        rect(0,0,this.width,this.height);
        pop()
    } 
}