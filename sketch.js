var bullet,bullet2,bullet3,wall1,wall2,wall3;
var thickness,weight,speed;
var damage;



function setup() {
  createCanvas(400,400);
  bullet=createSprite(50,50, 50, 10);
  bullet2=createSprite(50,200,50,10);
  bullet3=createSprite(50,350,50,10);

  bullet.shapeColor=(255,255,255)
  bullet2.shapeColor=(255,255,255)
  bullet3.shapeColor=(255,255,255)

  thickness=random(22,83);
  wall=createSprite(350,50,thickness,90); 
  wall2=createSprite(350,200,thickness,90);
  wall3=createSprite(350,350,thickness,90)

  weight=random(30,52); 
  speed=random(20,30)

  bullet.velocityX=speed;
  bullet2.velocityX=speed;
  bullet3.velocityX=speed;
  }

function draw() {
  background(0,0,255);  

  if (istouching(bullet,wall)){
   damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  } 
   if (damage>10){
    wall.shapeColor=color(255,0,0); 
    bullet.velocityX=0;
   } 
   if (damage<10){
     wall.shapeColor=color(0,255,0);
     bullet.velocityX=0;
   }


   if (istouching(bullet2,wall2)){
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
   } 
    if (damage>10){
     wall2.shapeColor=color(255,0,0); 
     bullet2.velocityX=0;
    } 
    if (damage<10){
      wall2.shapeColor=color(0,255,0);
      bullet2.velocityX=0;
    }

    if (istouching(bullet3,wall3)){
      damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
     } 
      if (damage>10){
       wall3.shapeColor=color(255,0,0); 
       bullet3.velocityX=0;
      } 
      if (damage<10){
        wall3.shapeColor=color(0,255,0);
        bullet3.velocityX=0;
      }

                                   
  drawSprites();  
}

function istouching (bullet,wall){

  if (bullet.x-wall.x<bullet.width/2+wall.width/2 &&wall.x-bullet.x<wall.width/2+bullet.width/2&&
    bullet.y-wall.y<bullet.height/2+wall.height/2 &&wall.y-bullet.y<wall.height/2+bullet.height/2){  
  return true;
  }
  else  {
  return false;  
  } 
}

function istouching (bullet2,wall2){

  if (bullet2.x-wall2.x<bullet2.width/2+wall2.width/2 &&wall2.x-bullet2.x<wall2.width/2+bullet2.width/2&&
    bullet2.y-wall2.y<bullet2.height/2+wall2.height/2 &&wall2.y-bullet2.y<wall2.height/2+bullet2.height/2){  
  return true;
  }
  else  {
  return false;  
  } 
}

function istouching (bullet3,wall3){

  if (bullet3.x-wall3.x<bullet3.width/2+wall3.width/2 &&wall3.x-bullet3.x<wall3.width/2+bullet3.width/2&&
    bullet3.y-wall3.y<bullet3.height/2+wall3.height/2 &&wall3.y-bullet3.y<wall3.height/2+bullet3.height/2){  
  return true;
  }
  else  {
  return false;  
  } 
}
