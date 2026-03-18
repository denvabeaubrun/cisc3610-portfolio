//canvas and context
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

//Background 
context.fillStyle = "peachpuff";
context.fillRect(0, 0, canvas.width, canvas.height);

//ground
context.fillStyle = "brown";
context.fillRect(0, 400, canvas.width, 200);

//sun
context.beginPath();
context.arc(700, 100, 50, 0, 2 * Math.PI);
context.fillStyle ="yellow";
context.fill();

//house
context.fillStyle = "beige";
context.fillRect(300, 250, 200, 150);


