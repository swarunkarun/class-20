var fixedrect, movingrect

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 30, 50);
  fixedrect.shapeColor = "blue";
  fixedrect.velocityX = 2;
  movingrect = createSprite(600, 200, 50, 30);
  movingrect.shapeColor = "blue";
  movingrect.velocityX = -2;

  movingrect.debug = true;
  fixedrect.debug = true;
}

function draw() {
  background(0); 
  
  //movingrect.x = mouseX;
  //movingrect.y = mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+ fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2 + fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2 + fixedrect.height/){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else{
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }
  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+ fixedrect.width/2){
      fixedrect.velocityX = fixedrect.velocityX * (-1);
      movingrect.velocityX = movingrect.velocityX * (-1);
    }

    if(  movingrect.y-fixedrect.y<movingrect.height/2 + fixedrect.height/2&&
      fixedrect.y-movingrect.y<movingrect.height/2 + fixedrect.height/2){
        fixedrect.velocityY = fixedrect.velocityY * (-1);
        movingrect.velocityY = movingrect.velocityY * (-1);   
      }

  drawSprites();
}