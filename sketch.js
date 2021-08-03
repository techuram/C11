
function preload(){
  //pre-load images
  bomb_img = loadImage("bomb.png");
  coin_img = loadImage("coin.png");
  energyDrink_img = loadImage("energyDrink.png");
  path_img = loadImage("path.png");
  power_img = loadImage("power.png");
  Runner1_img = loadImage("Runner-1.png");
  Runner2_img = loadImage("Runner-2.png");
  running_boy = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage("path", path_img);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(200, 270, 200, 200);
  boy.addAnimation("running", running_boy);
  boy.scale = 0.05;

  left_invisible = createSprite(35, 200, 20, 400);
  left_invisible.visible = false;
  
  right_invisible = createSprite(365, 200, 20, 400);
  right_invisible.visible = false;
}



function draw() {
  background(0);
  
  boy.x = World.mouseX
  
  if (path.y > 400) {
    path.y = height / 2
  }

  boy.collide(right_invisible);
  boy.collide(left_invisible);

  drawSprites();
}
