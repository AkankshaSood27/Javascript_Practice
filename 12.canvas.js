canvas=document.getElementById("mycanvas");
canvas.width=400;
canvas.height=400;

//canvas object is used to draw graphics--we use context

pen=canvas.getContext('2d');// to make in 2d
pen.fillStyle = "green";
pen.fillRect(20,20,30,30)

pen.strokeStyle = "yellow";
pen.arc(20,20,20,0,2*Math.PI)
pen.stroke()
//pen.fillStyle = "green";
//pen.fill(); //to fill the circle 



