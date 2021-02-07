
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,roofObject1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(320,370,30);
	bobObject2 =  new Bob(350,370,30)
	bobObject3 =  new Bob(380,370,30)
	bobObject4 =  new Bob(410,370,30)
	bobObject5 =  new Bob(440,370,30)
	roof= new Roof(width/2,190,230,10)
	
	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display()
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
 
  drawSprites();
 
}



