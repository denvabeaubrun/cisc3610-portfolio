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

//water base
context.fillStyle = "#1E90FF";
context.fillRect(0,400,canvas.width,100);

//water(waves) first row
context.fillStyle = "#1E90FF";
for(let x = 0; x<900; x+=40){
  context.beginPath();
  context.arc(x, 400, 20, 0, Math.PI, true);
  context.fill();
}

//more waves, second row
context.fillStyle = "#63C5DA";
for(let x = 12; x<900; x+=40){
  context.beginPath();
  context.arc(x, 390, 20, 0, Math.PI, true);
  context.fill();
}


