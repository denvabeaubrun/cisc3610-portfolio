//canvas and context
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

//Background 
context.fillStyle = "orange";
context.fillRect(0, 0, canvas.width, canvas.height);

//ground
context.fillStyle = "tan";
context.fillRect(0, 400, canvas.width, 200);

//sun
context.beginPath();
context.arc(700, 100, 50, 0, 2 * Math.PI);
context.fillStyle ="yellow";
context.fill();


