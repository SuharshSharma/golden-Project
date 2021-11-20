var steve;
var steveImg,bgImg;
function preload(){
  steveImg = loadAnimation("images/P1.png","images/P2.png","images/P3.png","images/P4.png","images/P5.png","images/P6.png");
  bgImg = loadImage("images/bg.png");

}
function setup() {
  createCanvas(800,400);
  
  bg = createSprite(400,200)
  bg.addImage (bgImg);
  bg.scale = 1.5;

  steve = createSprite(70,300,100,100);
  steve.addAnimation("player",steveImg);
  steve.scale = 0.7;
  

 // createSprite(400, 200, 50, 50);
}


function draw() {
  background("yellow");  
  if(keyDown("UP_ARROW")){
    steve.y = steve.y-5;

  }
  if(keyDown("DOWN_ARROW")){
    steve.y = steve.y+5;

  }
  if(keyDown("RIGHT_ARROW")){
    steve.x = steve.x+5;

  }
  if(keyDown("LEFT_ARROW")){
    steve.x = steve.x-5;

  }
  drawSprites();
}
