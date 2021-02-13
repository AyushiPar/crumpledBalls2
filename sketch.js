
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var binI,bin;

function preload(){
	binI = loadImage("dustbin.png");
}

function setup() {
	createCanvas(825, 600);


	engine = Engine.create();
	world = engine.world;

	bin = createSprite(530,505,100,120);
	bin.addImage(binI);
	bin.scale=0.44;
	//Create the Bodies Here

	paper = new Paper(100,565,55,55);
	ground = new Ground(412,580,825,30);

	Lside = new Dustbin(480,502,8,139);
	Rside = new Dustbin (580,502,8,139);
	Bbin = new Dustbin(525,565,100,10);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");
  Engine.update(engine);

  paper.display();
  ground.display();

  Lside.display();
  Rside.display();
  Bbin.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-32});
	}
}



