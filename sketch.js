const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone,tree,treeIMG;
var boyIMG, boySprite;

var mango1,mango2,mango3,mango4,mango5;

function preload()
{
  boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  stone = new Stone(100,350,25);

  ground = new Ground(500,590,1000,20);

  mango1 = new Mango(800,300,25);
  mango2 = new Mango(700,280,25);
  mango3 = new Mango(600,250,25);
  mango4 = new Mango(650,310,25);
  mango5 = new Mango(760,350,25);

  tree = new Tree(600,100,20,20);

  chain = new Chain(stone.body,{x: 125,y:430});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");
  
  image(boyIMG,90,350,200,300);

  tree.display();
  stone.display();
  ground.display();
  chain.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
chain.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  //console.log(mangoBodyPosition)
  stoneBodyPosition = lstone.body.position;
  
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance <= lmango.radius  + lstone.radius )
  {
    Matter.body.setStatic(lmango.body,false);
  }
}

