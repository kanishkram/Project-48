var arrow,arrowimg;
var deathstroke,deathstrokeimg;
var canvas;
var form,game,player;
var gameState = 0;

function preload(){
  arrowimg = loadImage("images/arrow.png")
  deathstrokeimg = loadImage("images/deathstroke.png")
}



function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  database = firebase.database();
game = new Game();
game.getState();
game.start();
  //arrow=createSprite(70, 500, 50, 50);
  //arrow.addImage("arrow",arrowimg);
  //arrow.scale = 0.5;

  //deathstroke = createSprite(1100,500,50,50);
  //deathstroke.addImage("deathstroke",deathstrokeimg);
  //deathstroke.scale=0.6;
}

function draw() {
  background(255,255,255);  
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState===1){
    clear();
game.play();
  }

  
}