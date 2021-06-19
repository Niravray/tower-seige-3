
//adding Engine and worlds.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,polygon_img;
var slingShot;

function preload()
{
	polygon_img = loadImage('polygon.png');
}

function setup() {


	//setting canvas.
	createCanvas(1300, 680);

    //creating engine.
        engine = Engine.create();
        world = engine.world;

    var balloption = {
        'restitution':0.1,
        'friction':0.1,
        'density':1.0
     }

     polygon = Bodies.circle(100,100,35,balloption);
    World.add(world,polygon);

    

	//Creating the groundObject Here.
    ground1 = new Ground (650,670,1300,20);
	ground2 = new Ground (1050,300,400,20);
    ground3 = new Ground (560,500,320,20);



    //creating the boxObject here.
	//level1
	block1 = new Box (440,305,40,40);
	block2 = new Box (480,310,40,40);
    block3 = new Box (520,315,40,40);
	block4 = new Box (560,305,40,40);
	block5 = new Box (600,315,40,40);
	block6 = new Box (640,310,40,40);
	block7 = new Box (680,305,40,40);
	//level2
	block8 = new Box (480,205,40,40);
	block9 = new Box (520,210,40,40);
	block10 = new Box(560,215,40,40);
	block11 = new Box (600,210,40,40);
	block12 = new Box (640,205,40,40);
    //level3
	block13 = new Box (520,105,40,40);
	block14 = new Box (560,110,40,40);
	block15 = new Box (600,101,40,40);
	//level4
	block16 = new Box (560,0,40,40);

    //another tower
    //level1
    block17 = new Box (900,250,40,40);
    block18 = new Box (940,250,40,40);
    block19 = new Box (980,250,40,40);
    block20 = new Box (1020,250,40,40);
    block21 = new Box (1060,250,40,40);
    block22 = new Box (1100,250,40,40);
    block23 = new Box (1140,250,40,40);
    //level2
    block24 = new Box (940,205,40,40);
    block25 = new Box (980,200,40,40);
    block26 = new Box (1020,215,40,40);
    block27 = new Box (1060,205,40,40);
    block28 = new Box (1100,200,40,40);
    //level3
    block29 = new Box (980,100,40,40);
    block30 = new Box (1020,105,40,40);
    block31 = new Box (1060,115,40,40);
	//level4
    block32 = new Box (1020,0,40,40);

    slingshot = new SlingShot (this.polygon,{x:300,y:200})

   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //displaying objects.
  background(0);

  imageMode (CENTER);
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  
  slingshot.display();
  //displaying objects.
  ground1.display();
  ground2.display();
  ground3.display();
  //displaying blocks
  fill("blue");
  //stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("green");
  //stroke(15);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("red");
  //stroke(15);
  block13.display();
  block14.display();
  block15.display();
  fill("white");
  //stroke(15);
  block16.display();
  fill("blue");
  //stroke(15);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("green");
 // stroke(15);
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("red");
  //stroke(15);
  block29.display();
  block30.display();
  block31.display();
  fill("white");
  //stroke(15);
  block32.display();



  drawSprites();
 
}


function mouseDragged() 
{
    //this.polygon.position.x = mouseX;
    //this.polygon.position.y = mouseY;
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed(params) {
    if (keyCode === 32) {
        slingshot = new SlingShot (this.polygon,{x:300,y:200}) 
    }
}