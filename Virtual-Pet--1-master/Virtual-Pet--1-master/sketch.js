//Create variables here
var dog,happyDog;
var dogImg,happyDogImg;
var foodS,foodStock;
//
function preload()
{
  happydog=loadImage(happydog(1).png)
  dog=loadImage(Dog(1).png)
}

function setup() {
  createCanvas(500,500);
  foodStock= database.ref('Food')
  foodStock.on("value",readstock)
}


function draw() {
  background(49,139,87)  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS= data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{x=x-1}
  database.ref('/').update({food:x
  })
}

