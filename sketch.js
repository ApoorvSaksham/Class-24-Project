const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1, rubber2, rubber3, rubber4, rubber5, rubber6, rubber7, rubber8, rubber9, rubber10;
var stone;
var iron;
var sphere;
var bgmusic;

function preload (){
    bgmusic = loadSound("Bg music.mp3");
}

function setup(){
 createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    
    hammer = new Hammer(100,200);
    plane = new Plane(600,height,1200,20)
    rubber1 = new Rubber(495,540,15,15);
    rubber2 = new Rubber(480,540,15,15);
    rubber3 = new Rubber(465,540,15,15);
    rubber4 = new Rubber(450,540,15,15);
    rubber5 = new Rubber(435,540,15,15);
    rubber6 = new Rubber(420,540,15,15);
    rubber7 = new Rubber(405,540,15,15);
    rubber8 = new Rubber(390,540,15,15);
    rubber9 = new Rubber(375,540,15,15);
    rubber10 = new Rubber(360,540,15,15);
    stone = new Stone(600,540);
    iron = new Iron(250,540);
    sphere = new Sphere(800,540);
    
 
bgmusic.play();

    
}

function draw(){
    background("Cyan");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
    stone.display();
    iron.display();
    sphere.display();
    

    
 
}