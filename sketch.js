var sea;
var seaImg;
var shipImgs;
var ship;
function preload(){
shipImgs=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg=loadImage("sea.png");
shipImgs=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,10,10);
  sea.addImage(seaImg);
  sea.scale=0.2;
  sea.velocityX=-0.2;
  ship=createSprite(200,200);
  ship.addImage(shipImgs);
  ship.scale=0.2;
}

function draw() {
  background("white");
  drawSprites();
  

 
}