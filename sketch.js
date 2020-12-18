
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score,ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
  
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("shine",monkey_running);
 monkey.scale=0.1;
  
 ground=createSprite(300,350,600,10);
 ground.velocityX=-4;
 ground.x=ground.width/2;
 console.log(ground.x) 
  
  bananaGroup= new Group ();
  obstacleGroup= new Group ();
  
}


function draw() {
background("white") 
  
 
   
drawSprites();
 
  if(keyDown("space")&& monkey.y >= 314) {
    monkey.velocityY = -20;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
 if(ground.x<300){
  ground.x=ground.width/2;
 } 
  
 monkey.collide(ground); 
  
  stroke("black");
  textSize(20);
  fill("white");
  servivalTime=Math.ceil(frameCount/frameRate());
  text("Servival Time: "+servivalTime,100,50);
  
  
  
   
   Spawnobstacle () ;
   Spawnbanana () ;
}

 function Spawnbanana (){
   
    if (frameCount % 80 === 0) {
    banana= createSprite(600,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120,200))
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
      
      
      bananaGroup.add(banana)
    }

 }

 function Spawnobstacle (){
   
    if (frameCount % 300 === 0) {
    obstacle= createSprite(100,600,40,10);
    obstacle.addImage(obstacleImage)
    obstacle.y = Math.round(random(600))
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
      
      
      obstacleGroup.add(obstacle)
    }

 }
