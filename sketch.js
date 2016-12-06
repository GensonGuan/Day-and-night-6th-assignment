var myImage;
var state = true;

//move
var r, posiX, posiY;

var incrementX = 5;
var incrementY = 5;
 
function preload(){
    myImage = loadImage("images/blackwhite.jpg");
}



function setup() {
  
  angleMode(DEGREES)
  frameRate(30)
  
  createCanvas(windowWidth,windowHeight);
    background(200);
    //myImage.filter("gray");
    //myImage.filter("invert");
    //myImage.filter("threshold",0.35);
   //myImage.filter("posterize",5);
    //myImage.filter("blur",25);
    imageMode(CENTER);
    image(myImage,width/2,height/2,windowWidth,windowHeight);
    
    //move
    r = 100,
        posiX = random(r,250);
        posiY = random(r,150);
    
}

function draw() {
  
  
  
  
if (state == true) {
    //for (var i = 0; i <= 50; i++)
    {
    // the image to display | x position | y position | width | height
    //imageMode(CENTER);
    //image(myImage,width/2,height/2,800,600);
    
    var posX = random(0,width);
    var posY = random(0,height);
    
    var myColor = get(posX,posY);
    fill(myColor);
    stroke(0,80,random)
    //noStroke();
    //ellipse(posX,posY,30,30)
    //rect(posX,posY,1000,5)
    
    
    //xuanzhuan
  push()
  translate(width/2,height/2)
  rotate(frameCount)
  //lerpColor(color1,color2,number from 0 to 1) 
  fill(lerpColor(color(0),color(255),(frameCount%360)/120)) 
  rect(0,0,600,10)
  rotate(frameCount/2)
  rect(300,0,600,25)
  rotate(frameCount/3)
  rect(600,0,600,40)
  //rotate(frameCount/4)
  //rect(600,0,300,40)
  //rotate(frameCount/5)
  //rect(800,0,300,50)
  pop()
    }
}
  //move
  rect(posiX,posiY,r+200,r+200)
  //ellipse(posiX,posiY,r,r);
    
    posiX += incrementX;
    
    if( posiX >= width-r-200 || posiX <= 0) {
        incrementX *= -1;
    }
    posiY += incrementY;
    if( posiY >= height-r-200 || posiY <= 0) {
        incrementY *= -1; 
    }
    
    //clock
    translate(0,-1*((r+200)/12))
    fill(255);
    textFont('Audiowide')
    textSize((r+200)/2);
    textAlign(CENTER);
    text(hour(),posiX+(r+200)/2,posiY+(r+200)/2);
    text(minute(),posiX+(r+200)/2,posiY+(r+200)/2*2);
    textFont('Righteous')
    textSize((r+200));
    translate(0,-1*((r+200)/10))
    text(second(),posiX-(r+200)/2,posiY+(r+200));
    textSize(30)
    text('Click to change mode',windowWidth/2,windowHeight/20*19)
    
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}    
function mousePressed() {
    if (state == true) {
        state = false    
    }else{
        state = true
    
    }  
}
