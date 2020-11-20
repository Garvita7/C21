var fixedRect, movingRect, gameobject1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //gameobject1 = createSprite(200,200,50,50);
  //gameobject1.shapeColor = "green";
  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameobject1)){
    movingRect.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameobject1.shapeColor = "green";
  }*/

  bounceOff(fixedRect, movingRect);

  drawSprites();
}


