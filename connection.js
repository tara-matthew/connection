
function setup() {
    createCanvas(700,700);
}

function draw() {
    noLoop();
    translate(width / 2, height / 2);
    scale(1);
    var circlePoints = calculateCirclePoints(20,280,0,0);
    drawLines(circlePoints);
}

function drawLines(points) {
    for (var i = 0; i < points.length-3; i +=4) {
        for (var j = 2; j < points.length-1; j +=2) {
            strokeWeight(.8);
            line(points[i], points[i+1], points[j], points[j+1])
        }
    }
}

function calculateCirclePoints(points, radius, centreX, centreY) {
    var slice = 2 * PI / points;
    let circleAngle = 0;
    newCoords = [];
    while (circleAngle < points) {

        angle = slice * circleAngle;
        let newX = centreX + radius * cos(angle);
        let newY = centreY + radius * sin(angle);

        newCoords.push(newX);
        newCoords.push(newY);

        circleAngle++;
    }

    return newCoords;
}
