const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var boy,backgroundImg;
var snow=[];
var ground,engine,world;



function preload(){
  backgroundImg=loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  //createSprite(400, 200, 50, 50);
  boy = new Boy(400,200,10);
  ground= new Ground(400,300,800,10);

  for(var a = 100;a<=width-100;a=a+100){
    snow.push(new Snow(random(a,225),0,10));
    snow.lifetime=20;
     }
}

function draw() {
  background(backgroundImg); 
Engine.update(engine);
  //drawSprites();
  boy.display();
  ground.display();
  
  if(keyDown(UP_ARROW)){
keyPressed();
  }

  for(var b = 100;b< snow.length;b++){
    snow[b].display();
     }

spawnSnow()

}

function keyPressed(){
  Matter.Body.applyForce(boy.body,boy.body.position,{x:0,y:-40});
}

function spawnSnow(){
  if(frameCount % 10 === 0){
    for(var a = 100;a<=width-100;a=a+100){
      snow.push(new Snow(random(a,225),0,10));
      this.snow.scale=20;
       }
  }
}


  

  
