var ballx = 300
var bally = 300
var ballSize = 70
var circlex = 100
var circley = 200
var circleSize = 100
var score = 0;
var gameState = "Start";
let timer = 60;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(20);
 
}

function draw() {
  background(220);
  
  if(gameState == "Start"){
    starting();
  }
  
  if(gameState == "END"){
    gameOver();
  }
  
  if(gameState == "L1"){
    levelOne();
  }
  
  if(gameState == "L2"){
    levelTwo();
  }
  
  if(gameState == "L3"){
    levelThree();
  }
  
  if(gameState == "L4"){
    levelFour();
  }
  
    if(gameState == "L1" || gameState == "L2" || gameState == "L3" || gameState == "L4"){
   text("Score:   " + score, width/2,30)
   push();
   textSize(18)
   text("Time:   " + timer,width/2,50)
   pop();
  
   if(frameCount % 80 == 0 && timer > 0){
      
      timer --;
      
    }
    
    if(timer === 0){
      
      gameState = "END"
      
    }
  
    
  }
}

function starting(){
  
  var shape
  var shapeSize = 310
  ellipse(width/2,height/2,shapeSize)
  
  push();
  textSize(50)
  textStyle(BOLD)
  fill(110)
  text("Circle Game", width/2,height/2)
  textSize(20)
  text ("Press P to Play", width/2,330)
  pop();
  
  if(keyCode === 80 || touches.length > 0){
    
    gameState = "L1"
    
  }
  
 
}

function levelOne(){
  
  text("Level 1", width/2, height/1);
  var distBall = dist(ballx,bally,touches[0].x,touches[0].y)
  touches = []
  if(distBall < ballSize){
    
    ballx=random(width);
    bally=random(height);
    
    score = score + 1
    
   
    
  }
      
    if(score>=5){
      
      gameState = "L2"
      
    }

    ellipse(ballx,bally,ballSize,ballSize)
    line(ballx,bally,touches[0].x,touches[0].y)

}//=======================level1 end


function levelTwo(){
  
  text("Level 2", width/2, height/1);
  var distBall = dist(ballx,bally,touches[0].x,touches[0].y)
  if(distBall < ballSize/2){
    
    ballx=random(width);
    bally=random(height);
    
    score = score + 1
    
   
    
  }
      
    if(score>=10){
      
      gameState = "L3";
      
    }
  
    ellipse(ballx,bally,ballSize,ballSize)
   //line(ballx,bally,mouseX,mouseY)

  
}//=======================level2 end

function levelThree(){
  
  text("Level 3", width/2, height/1);
  var distBall = dist(ballx,bally,touches[0].x,touches[0].y)
  if(distBall < ballSize/2){
    
    ballx=random(width);
    bally=random(height);
    circlex=random(width)
    circley=random(height)
    
    score = score + 1
    
  }
      
  var distCircle = dist(circlex,circley,touches[0].x,touches[0].y)
  if(distCircle < ballSize/2){
    gameState = "END";
  }
    
    if(score>=15){
      
      gameState = "L4";
      
    }
    
    ellipse(ballx,bally,ballSize,ballSize)
    push();
    fill("red")
    ellipse(circlex,circley,circleSize,circleSize)
    pop();
}//=======================level3 end



function levelFour(){
  
  text("Level 4", width/2, height/1);
  var distBall = dist(ballx,bally,touches[0].x,touches[0].y)
  if(distBall < ballSize/2){
    
    ballx=random(width);
    bally=random(height);
    circlex=random(width)
    circley=random(height)
    ballSize=ballSize-8;
    
    score = score + 1
    
  }
      
  var distCircle = dist(circlex,circley,touches[0].x,touches[0].y)
  if(distCircle < ballSize/2){
    gameState = "END";
  }
    
  if(score>=20){
      
      gameState = "L5";
      
    }
    
    ellipse(ballx,bally,ballSize,ballSize)
    push();
    fill("red")
    ellipse(circlex,circley,circleSize,circleSize)
    pop();
}//=======================level4 end




function gameOver(){
  
  score = 0
  
  background(166,49,49)
  text("GAME OVER",width/2,height/2);
  
  push();
  textSize(15)
  text("Press Space to Restart",width/2,330);
  pop();
  
  if(keyCode === 32 || touches.length > 0){
    
    gameState = "L1";
    
  }
  
}

