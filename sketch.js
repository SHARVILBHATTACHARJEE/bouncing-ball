var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);

    //create 4 different surfaces
   s1=createSprite(100,550,100,50)
   s1.shapeColor="green"
   s2=createSprite(250,550,100,50)
   s2.shapeColor="red"
   s3=createSprite(400,550,100,50)
   s3.shapeColor="blue"
   s4=createSprite(550,550,100,50)   
   s4.shapeColor="orange"

   b=createSprite(325,200,50,50)
   b.shapeColor="pink"
   b.velocityX=random(2,10)
   b.velocityY=random(2,10)
   edges=createEdgeSprites()
   
    //create box sprite and give velocity
music.play()
}
function draw() {
    background("black");
    //create edgeSprite
   

 if(b.isTouching(s1)){
    b.bounceOff(s1)
    b.shapeColor=s1.shapeColor
}

if(b.isTouching(s2)){
    b.bounceOff(s2)
    b.shapeColor=s2.shapeColor
}
if(b.isTouching(s4)){
    b.bounceOff(s4)
    b.shapeColor=s4.shapeColor
}
if(b.isTouching(s3)){
   b.velocityX=0
   b.velocityY=0 
   music.stop()
}
b.bounceOff(edges)
drawSprites()

    //add condition to check if box touching surface and make it box
}
