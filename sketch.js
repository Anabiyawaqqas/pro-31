var tree1,mongo1,stone
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    Engine.run(engine);
  
}

 
function draw() {
  rectMode(CENTER);
  background("lightblue");
}

