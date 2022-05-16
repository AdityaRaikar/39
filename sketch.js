var bird,birdImg;
var human ,humanImg;
var food,foodImg;
var cloud,cloudImg;
var ground,groundImg;
var score=0;

function preload(){
  birdImg=loadImage("images/bird.png");
  cloudImg=loadImage("images/cloud.png");
  foodImg=loadImage("images/food.png");
  humanImg=loadImage("images/Ninja-removebg-preview.png");
  groundImg=loadImage("images/dground.jpg");
}

function setup() {
  createCanvas(800,400);

  ground=createSprite(400,200,800,200);
  ground.addImage(groundImg);
   ground.velocityX=-3;
   ground.scale=2.9;

   bird=createSprite(60,300,20,20);
   bird.addImage(birdImg);
   bird.scale=0.2;
  

 
 foodGroup=createGroup();
    obstacleGroup=createGroup();
  

}

function draw() {
  background(255); 
 if(ground.x<260){
  ground.x = 500;
 }
 if(keyIsDown(UP_ARROW)){
  bird.y=bird.y-10
}
if(keyIsDown(DOWN_ARROW)){
  bird.y=bird.y+10


}










spawnObstacles();
spawnfood();



drawSprites()
fill("black")
textSize(20)
text("Score: "+ score, 500,50);


if(obstacleGroup.isTouching(bird)){
 background(0);
 score=0;
 fill("yellow")
 textSize(50)
  text("GAME OVER ",250,200)

 bird.stop();
 obstacleGroup.stop();
 foodGroup.stop();
 


}
}





function spawnObstacles(){
if (frameCount % 50 === 0){
human = createSprite(600,400,20,20);
human.addImage(humanImg);
human.velocityX = -6;
human.scale = 0.3 ;


var rand = Math.round(random(1,6));
switch(rand) {
  case 1: human.y =50;
          break;
 case 2:human.y=200;
    break;
    case 4:human.y=250;
    break;
    case 3:human.y=350;
    break;
    case 5: human.y =150;
    break;
    case 6: human.y =100;
    break;

  default: break;
}

           

human.lifetime = 500;


obstacleGroup.add(human);
}



}

function spawnfood() {

if (frameCount % 50 === 0) {
food = createSprite(600,100,40,10);
food.addImage(foodImg);
food.scale = 0.2;
food.velocityX = -5;
var rand = Math.round(random(1,6));
switch(rand) {
  case 1: food.y =50;
          break;
 case 2:food.y=200;
    break;
    case 4:food.y=250;
    break;
    case 3:food.y=350;
    break;
    case 5: food.y =150;
    break;
    case 6: food.y =100;
    break;

  default: break;
}

food.lifetime = 500;

if (foodGroup.isTouching(bird)){
  food.destroy();
  score=score+10
}




foodGroup.add(food);
}
}






 
  

  
 