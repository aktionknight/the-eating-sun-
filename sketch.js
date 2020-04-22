sun , planet1 , planet2 , planet3

function setup() {
createCanvas(1000,1000)
sun = createSprite(500,500,60,60)
sun.shapeColor = "yellow"

planet1 = createSprite(400,400,20,20)
planet1.shapeColor = "blue"

planet2 = createSprite(300,300,20,20)
planet2.shapeColor = "red"

planet3 = createSprite(200,200,20,20)
planet3.shapeColor = "green"

}
function draw() {
  background(0);  

  if (World.frameCount % 30 === Math.round(0))
  {
    sun.height = sun.height + 10
    sun.width = sun.width + 10
  }
 
  if (sun.isTouching(planet1 ))
  {
    planet1.visible = false;
  }

  if (sun.isTouching(planet2 ))
  {
    planet2.visible = false;
  }


 if (sun.isTouching(planet3 ))
  {
   planet3.visible = false;
  }


  revolution();
  drawSprites();

}


function revolution(){
if (planet1.x === 400 && planet1.y === 400)
{
  planet1.VelocityX = 2;

}

if (planet1.x === 800 && planet1.y === 400)
{
  planet1.VelocityY = 2;
  planet1.VelocityX = 0;
}

if (planet1.y === 800 && planet1.x === 800)
{
  planet1.VelocityX = -2;

}

if (planet1.x === 400 && planet1.y === 800)
{
  planet1.VelocityY = -2;

}

}