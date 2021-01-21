
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ball;
 var ground;
 var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper (50,600);
	ground= new Ground(400,670,1500,10);
	box1= new Box(700,620,20,100);
	box2 = new Box(890,620,20,100)
	box3 = new Box(795,660,210,20)
	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine)
  ball.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()


}
function KeyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

	} 
}



