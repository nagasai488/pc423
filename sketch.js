var iss,spaceCraft,hasDocked=false;
var bgImg,issImg,spaceCraftImg,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3;
function preload(){

  bgImg=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  spaceCraftImg=loadImage("spacecraft1.png");
  spaceCraftImg1=loadImage("spacecraft2.png");
  spaceCraftImg2=loadImage("spacecraft3.png");
  spaceCraftImg3=loadImage("spacecraft4.png");
}


function setup() {
  createCanvas(1100,700);
 iss = createSprite(550, 300, 50, 50);
 iss.addImage(issImg)
 iss.scale=0.7;

 spaceCraft=createSprite(200,600)
 spaceCraft.addImage(spaceCraftImg)
 spaceCraft.scale=0.4;

}

function draw() {
  background(bgImg);  
  

  
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-5,5);

        if(keyDown("left")){
             spaceCraft.x=spaceCraft.x-5
            spaceCraft.addImage(spaceCraftImg2)
        }

        if(keyDown("right")){
          spaceCraft.x=spaceCraft.x+5
          spaceCraft.addImage(spaceCraftImg3)
        }

        if(keyDown("up")){
          spaceCraft.y=spaceCraft.y-5
         
        }
   
        if(keyDown("down")){
          spaceCraft.velocityY=0
          spaceCraft.addImage( spaceCraftImg1)
        }

  }
  if(spaceCraft.x<iss.x+10 && spaceCraft.y<iss.y+150 ){

  hasDocked=true;
  textSize(20)
 fill ("red")
 stroke ("red")
  text("DOCKING SUCCESSFUL!",500,550)

  }

    drawSprites();

}