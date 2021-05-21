var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var player_img;
var score=0;
var plastic, plasticGroup;
var bag,bottle,fertilizer,oil,rings,straw;
var play=1;
var end=2;
var gameOver, gameOverImg;
var invisiblePlat, invisiblePlat2;
var restart, restartImg;
var up, upImg;
var down, dowmImg;


function preload(){
  back_img = loadImage("images/background.jpg");
  player_img = loadImage("images/turtle.png");


  bag=loadImage("images/bag.png")
  bottle=loadImage("images/bottle.png")
  fertilizer=loadImage("images/fertilizer.png")
  oil=loadImage("images/oil.png")
  rings=loadImage("images/rings.png")
  straw=loadImage("images/straw.png")

 
}
function setup() {
  createCanvas(1000, 590);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  plasticGroup = new Group();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2 ) {
    
     game.end();
 }



 
}