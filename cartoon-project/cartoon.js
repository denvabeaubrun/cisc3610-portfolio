//canvas and context
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

//Background 
context.fillStyle = "orange";
context.fillRect(0, 0, canvas.width, canvas.height);

//ground(sand)
context.fillStyle = "#EDC9AF";
context.fillRect(0, 400, canvas.width, 200);

//sun
context.beginPath();
context.arc(700, 100, 50, 0, 2 * Math.PI);
context.fillStyle ="yellow";
context.fill();

//water(waves)
context.fillStyle = "#1E90FF";
for(let x = 0; x<800; x+=40){
  context.beginPath();
  context.arc(x, 350, 20, 0, Math.PI, true);
  context.fill();
  
}


