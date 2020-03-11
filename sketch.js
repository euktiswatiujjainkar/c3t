function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 250, 200);
  createSprite(650, 175, 20, 300);
  createSprite(150, 175, 20, 300);
  createSprite(245, 200, 50, 250);
 createSprite(555, 200, 50, 250); 
 createSprite(400, 80, 250, 30);
 createSprite(400, 50, 20, 30);
 createSprite(300, 50, 20, 30);
 createSprite(500, 50, 20, 30);
}

function draw() {
  background(255,255,255); 
 drawSprites();
}