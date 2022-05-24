var box;
var basketball;
var edges;

function preload()
{
  basketball = loadImage("bball.png");
}

function setup() 
{
  createCanvas(400,400);
  box = createSprite(100,200,10,10);
  box.addImage(basketball);
  box.scale = 0.3;
  edges = createEdgeSprites();
}

function draw() 
{
  background(30);
  drawSprites();

  if (keyDown(RIGHT_ARROW))
  {
    box.velocityX = 3;
  }

  if (keyDown(LEFT_ARROW))
  {
    box.velocityX = -3;
  }

  if (keyDown(UP_ARROW))
  {
    box.velocityY = -3;
  }

  if (keyDown(DOWN_ARROW))
  {
    box.velocityY = 3;
  }

  box.bounceOff(edges);
}




