// Updated cartoon.js

function drawHouse() {
    // house base
    drawRectangle(100, 200, 200, 200);

    // roof
    drawTriangle(100, 200, 200, 150, 300, 200);

    // round window moved to attic
    drawCircle(200, 310, 25); // y-coordinate updated to 310
}