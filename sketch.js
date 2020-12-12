
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

  stone = new Stone(160,500,25);
  
	mango1 = new Mango(1300,300,30);
	mango2 = new Mango(1400,250,30);
	mango3 = new Mango(1300,200,30);
	mango4 = new Mango(1390,300,30);
	mango5 = new Mango(1200,300,30);
  mango6 = new Mango(1500,280,30);

  tree = new Tree(1300,680);
  ground = new Ground(0,690,4000,150);
	boy = new Boy(240,525);
	chain = new Chain(stone.body,{x:183, y:540});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(114,210,232);

  fill(0);
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}