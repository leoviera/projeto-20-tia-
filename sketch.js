
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var ball_options = {
restitution: 0.5,
frictionAir:0,
friction: 0.02,
}

var rectangle_options = {
restitution: 0.7,
frictionAir: 0.1,
friction: 0.01,

}
 var square_options = {
restitution: 0.01,
friction: 1,
frictionAir: 0.3,

 }

 var chão_options = {

isStatic:true



 }
	Engine.run(engine);

	ball = Bodies.circle(220,10,10,ball_options);
	World.add(world,ball);
	square = Bodies.rectangle(110,50,10,10,square_options);
	World.add(world,square);
	rectangle = Bodies.rectangle(350,50,10,10,rectangle_options);
	World.add(world,rectangle);
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  drawSprites();



 ellipse(ball.position.x,ball.position.y,20);
 rect(square.position.x,square.position.y,20,20);
 rect(rectangle.postion.x,rectangle.position.y,400,20);
 

}



