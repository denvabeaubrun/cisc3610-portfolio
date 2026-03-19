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
context.fillRect(0,350,canvas.width,50);

//water(waves) first row
context.fillStyle = "#63C5DA";
for(let x = 0; x<900; x+=40){
  context.beginPath();
  context.arc(x, 380, 18, 0, Math.PI, true);
  context.fill();
}

//more waves, second row
context.fillStyle = "#63C5DA";
for(let x = 12; x<900; x+=40){
  context.beginPath();
  context.arc(x, 390, 20, 0, Math.PI, true);
  context.fill();
}
//house
context.fillStyle = "#6a5acd";
context.fillRect(250, 350, 200, 175);

//house door
context.fillStyle="#8b4513";
context.fillRect(330, 425, 40, 100);

//house doornob
context.fillStyle="gold";
context.beginPath();
context.arc(360, 470, 5, 0, Math.PI*2);
context.fill();

//house right window
context.fillStyle="#f1f1f1";
context.fillRect(280, 420, 40, 40);


//house left window
context.fillRect(415, 420, 40, 40);


//roof
context

