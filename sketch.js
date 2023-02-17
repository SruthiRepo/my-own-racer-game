
var gameState = 0;
var score = 0;

var prisonerSprite;

var bgIMG, prisonerAnimation, coinIMG, obstacleIMG, guardIMG;
var coinsGroup, obstaclesGroup;

function preload(){
  prisonerAnimation = loadAnimation("./assets/p1.png", "./assets/p2.png","./assets/p3.png","./assets/p4.png",
  "./assets/p5.png","./assets/p6.png")
}

function setup() {
  createCanvas(800,400);
  prisonerSprite = createSprite(width/2, height/2);
  prisonerSprite.addAnimation("running", prisonerAnimation);
}


function draw() {
  background(255,255,255);  
  drawSprites();
}