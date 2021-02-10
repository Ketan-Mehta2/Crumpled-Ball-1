
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin1,dustbin2,dustbin3;
var back;

function preload() {
  back = loadImage("sprites/bg.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
    ground = new Ground(400,height,800,20);
	paper = new Paper(100,680,10);
    dustbin1 = createSprite(500,680,10,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);

  ground.display();
  paper.display();
  
  
  drawSprites();
}