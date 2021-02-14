
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var girl,girlImage,stone,stoneImage;
function preload(){
girlImage = loadImage ("Plucking mangoes/boy.png");
stoneImage = loadImage ("Plucking mangoes/stone.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

girl = createSprite(200,200,200,200);
World.add(world,girl);
girl.addImage(girlImage);
girl.scale=0.2;
girl.x=400;
girl.y=500;

stone = createSprite(200,200,200,200);
World.add(world,stone);
stone.addImage(stoneImage);
stone.scale=0.1;
stone.x=300;
stone.y=400;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 

}
function display() {
	girl.display();
}





//new Girl(girl.body.position.x,girl.body.position.y,50,50);