const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box
var ball2
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    var ball2_options ={
        restitution: 2.0
    }

    var box_options  ={
        restitution: 1.0
    }


    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    box = Bodies.rectangle(200,200,100,100,box_options) ;
    World.add(world,box);

    ball2= Bodies.circle(200,200,40,ball2_options);
    World.add(world,ball2)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    rectMode(CENTER);
    rect(box.position.x,box.position.y,40,40);

    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball.position.y,60,60);
}    
