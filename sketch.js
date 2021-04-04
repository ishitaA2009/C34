const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    box1 = new Box(width-200,height-50);
    box2 = new Box(width-250,height-50);
    box3 = new Box(width-300,height-50);
    ball = new Ball(200,300,70);
    rope = new Rope(ball.body,{x:300,y:100});
}

function draw(){
    background("black")
    
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    ground.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    
}

