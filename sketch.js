var bg,bgImg
var player, shooterImg, shooter_shooting

//loads all our images
function preload() {
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  bgImg = loadImage("assets/bg.jpeg");
}


function setup() {

  //created a canvas for all devices
  createCanvas(windowWidth,windowHeight)

  //created and added the image to the sprite
  bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale=1.1

//created a player sprite and added the image along with the collider box
player=createSprite(displayWidth-1150,displayHeight-300,50,50)
player.addImage(shooterImg)
player.scale=0.3
player.debug=true
player.setCollider("rectangle",0,0,300,300)
}


function draw() {
//black background
background(0)

//makes the player go up
if (keyDown("UP_ARROW")||touches.length>0) {
player.y=player.y-30
}

//makes the player go down
if (keyDown("DOWN_ARROW")||touches.length>0) {
player.y=player.y+30
}

//when space is pressed it changes to the shooting image 
  if (keyWentDown("space")) {
player.addImage(shooter_shooting)



}
//when space is released changes back to shooter image
else if(keyWentUp("space")) {
  player.addImage(shooterImg)
}
    
  


drawSprites()
}

