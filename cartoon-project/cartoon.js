//canvas and context
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

//Background 
canvas.style.background = "peachpuff";

//ground
context.fillStyle = "brown"
context.fillRect(0, 400, canvas.width, 200);
