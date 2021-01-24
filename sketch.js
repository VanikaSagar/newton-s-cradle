
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new roof(350,200,350,20)
	bobDiameter=40
	startBobPositionX=width/2
	startBobPositionY=height/4+500

	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)
	bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter)
	bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
	bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)
	

	

	rope3=new rope(bob3.body,roof1.body,0,0)
	rope2=new rope(bob2.body,roof1.body,-bobDiameter*2,0)
	rope4=new rope(bob4.body,roof1.body,bobDiameter*2,0)
	rope1=new rope(bob1.body,roof1.body,-bobDiameter*3.5,0)
	rope5=new rope(bob5.body,roof1.body,bobDiameter*3,0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  roof1.display()
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope3.display()
  rope2.display()
  
  rope4.display()
  
  rope1.display()
  rope5.display()
  
 
}

function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position
	roofBodyOffset=constraint.pointB
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line (bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:-0})
	}
}



