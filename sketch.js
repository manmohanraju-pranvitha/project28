
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var tree;
var boy,boyimg;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var chain1;
function preload()
{
//treeimg=loadImage("tree.png");
boyimg=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(600,500,500,400);
	//tree.addImage(treeimg);
	//tree.scale=0.3;
	boy=createSprite(180,623,10,10);
	boy.addImage(boyimg);
	boy.scale=0.1;
ground1=new Ground(400,680,800,16);

mango1=new Mango(670,400,70,70);
mango2=new Mango(640,470,70,70);
mango3=new Mango(580,390,70,70);
mango4=new Mango(520,370,70,70);
mango5=new Mango(550,390,70,70);
mango6=new Mango(750,465,70,70);
mango7=new Mango(430,409,70,70);
stone1=new Stone(120,560,40,40);
chain1=new Chain(stone1.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  detectcollision(stone1,mango1);

  detectcollision(stone1,mamgo2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);

  ground1.display();
  tree.display();
  boy.display();
stone1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
chain1.display();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain1.fly();
}
function detectcollision (stone1,mango1){
	mangoBodyPosition=mango1.body.position 
	stoneBodyPosition=stone1.body.position
	var distance=dist(stone1.Body.Position.x,stone1.Body.position.y,mango1.Body.Position.x,mango1.Body.Position.y)
	if(distance<=mango.r+stone.r){
		Matter.body.setStatic(mango.body,false);
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:235,y:420});
		chain1.attach(stone1.body);
	}
}





