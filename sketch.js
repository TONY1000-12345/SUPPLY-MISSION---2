var helicopterIMG, helicopterSprite,ground;
var packageBody, packageSprite,packageIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup()
{
	createCanvas(800, 700);
	
	rectMode(CENTER);

	//Creating our packageSprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

    //Creating our helicopterSprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//Creating our groundSprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	
	//Creating our package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	//Creating our Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1=Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	World.add(world, box1);
	Engine.run(engine);
	
	box2=Bodies.rectangle(width/1.5, 540, 250, 20 , {isStatic:true} );
	World.add(world, box2);
    Engine.run(engine);

    box3=Bodies.rectangle(width/3, 540, 200, 20 , {isStatic:true} );
    World.add(world, box3);
    Engine.run(engine);
}

function draw() 
{
   rectMode(CENTER);
   background(0);
   Engine.update(engine)
   packageSprite.x= packageBody.position.x 
   packageSprite.y= packageBody.position.y 
   rect(box1.position.x,box1.position.y,250,20)
   rect(box2.position.x,box2.position.y,20,200)
   rect(box3.position.x,box3.position.y,20,200)
  drawSprites() 
}

function keyPressed()
 {
	if (keyCode === DOWN_ARROW) 
	{
		Matter.Body.setStatic(packageBody, false);
    }
}
