var gameState = "start";
var score = 0;
var edge1;
var edge2;
var edge3;
var edge4;
var getReady;
var playButton;
var player;
var gameOver;
var apple;

function preload(){
    appleImg = loadImage("images/appleImg.gif");
    playerImg = loadImage("images/playerImg.gif");
    gameOverImg = loadImage("images/GameOverImg.gif");
    getReadyImg = loadImage("images/getreadyImg.gif");
    playButtonImg = loadImage("images/playbuttonImg.gif");
};

function setup(){
 edge1 = createSprite(390, 200, 30, 400);
 edge2 = createSprite(10, 200, 30, 400);
 edge3 = createSprite(200, 10, 400, 30);
 edge4 = createSprite(200, 390, 400, 30);

 getReady = createSprite(200, 200, 50, 50);
  getReady.addImage(getReadyImg);
  getReady.visible = false;
  
 playButton = createSprite(200, 300, 20, 20);
  playButton.addImage(playButtonImg);
  playButton.visible = false;
  playButton.scale = 0.3;


 player = createSprite(200, 200);
  player.addImage(playerImg);
  player.scale = 0.5;
  player.visible = false;

 gameOver = createSprite(200, 200, 50, 50);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;


 apple = createSprite(random(10, 390), random(10, 390));
  apple.addImage(appleImg);
  apple.scale = 0.5;
  apple.visible = false;
};




function draw() {
  background("white");
  createEdgeSprites();
  collide();
  start();
  play();
  end();
      if(gameState === "start"){ 
    playButton.visible = true;
    getReady.visible = true;
    gameOver.visible = false;
      }
  
  
  if(player.isTouching(apple) ){
    //apple. destroy();
    
    apple.x = random(20, 380);
    apple.y = random(20, 380);
    score = score+1;
    console.log(score);
  }
  
  textSize(10);
  text("Score:" + " "+ score, 36, 43);
  

  if(gameState === "play"){
  if(keyDown(RIGHT_ARROW)){
    //player.x = player.x+10;
    player.velocityX = 4;
    player.velocityY = 0;
  }
  if(keyDown(LEFT_ARROW)){
    //player.x = player.x-10;
    player.velocityX = -4;
    player.velocityY = 0;
  }
  if(keyDown(UP_ARROW)){
    //player.y = player.y-10;
    player.velocityX = 0;
    player.velocityY = -4;
  }
  if(keyDown(DOWN_ARROW)){
    //player.y = player.y+10;
    player.velocityX = 0;
    player.velocityY = 4;
  }
}
  drawSprites();
  console.log(gameState);
}

function collide(){
  if(player.collide(edge1) ){
    gameState = "end";

  };
  if(player.collide(edge2) ){
    gameState = "end";

  };
  if(player.collide(edge3) ){
    gameState = "end";
    
  };
  if(player.collide(edge4) ){
    gameState = "end";

  };
}

function start(){
  if(keyDown("space") && gameState === "end"){
    gameState = "start";
    player.x = 200;
    player.y = 200;
    score = 0;

    
    

}
}

function play(){
  if(mousePressedOver(playButton) && gameState === "start"){
    gameState = "play";
    player.visible = true;
    apple.visible = true;
    playButton.visible = false;
    getReady.visible = false;
    
    
  }
}

function end(){
  if(gameState === "end"){
    gameOver.visible = true;
    player.visible = false;
    apple.visible = false;
    textSize(25);
    fill("red");
    text("Press space to restart", 100, 270);
  }
}

