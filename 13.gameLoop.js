
//pen.fillRect(rect.x,rect.y,rect.w,rect.h);



function init(){
  //we are creating this object only once
  canvas=document.getElementById("mycanvas");
  W=canvas.width=500;
  H=canvas.height=500;
  pen=canvas.getContext('2d')
  game_over=false;

  rect=
{
  x:20,
  y:20,
  w:30,
  h:30,
  speed:20
}
}

function draw(){
  //console.log("In Draw");
  pen.clearRect(0,0,W,H);
  pen.fillRect(rect.x,rect.y,rect.w,rect.h);
  pen.fillStyle="red";

}

function update(){
  //console.log("In Update");
  rect.x += rect.speed;//to move the rect
  if(rect.x> W-rect.w || rect.x < 0){
    //if rect has cross the boundry from right
    //if rect has cross the boundry from left
      rect.speed *= -1;
  }
}

function gameloop(){

  if(game_over==true){
    clearInterval(f);
  }

  console.log("In gameloop");
  
  draw();
  update();

}

init();
var f=setInterval(gameloop,100);//to call the func again and again


