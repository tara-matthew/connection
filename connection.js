let pointNumber = 1;

function setup() {
    createCanvas(700,700);
function reset() {
    clear();
    pointNumber = pointNumber + 1
    print(pointNumber);
    var circlePoints = calculateCirclePoints(pointNumber,280,0,0);
    drawLines(circlePoints);

    setTimeout(reset,((circlePoints.length-4) * 80) + 300);


}

function draw() {
    noLoop();
    translate(width / 2, height / 2);
    scale(1);
    var circlePoints = calculateCirclePoints(pointNumber,280,0,0);
    drawLines(circlePoints);

    setTimeout(reset,((circlePoints.length-4) * 80) + 300);
}


function drawLines(points) {
    for (let i = 0; i < points.length-3; i +=2) {
        setTimeout(function timer() {
            for (let j = 2; j < points.length-1; j +=2) {
                strokeWeight(.25);
                // stroke('rgb(255,0,0)');
                // fill('rgb(255,0,0)');
                setTimeout(function timer() {
                    // let r = random([0,255]);
                    // let g = random([180,255]);
                    // stroke(r,g,0);
                    // fill(r,g,0);
                    line(points[i], points[i+1], points[j], points[j+1]);
                }, j * 70)

            }
        }, i * 3)

    }
}

function calculateCirclePoints(points, radius, centreX, centreY) {
    var slice = 2 * PI / points;
    let circleAngle = 0;
    newCoords = [];
    while (circleAngle <= points) {

        angle = slice * circleAngle;
        let newX = centreX + radius * cos(angle);
        let newY = centreY + radius * sin(angle);

        newCoords.push(newX);
        newCoords.push(newY);

        circleAngle++;
    }

    return newCoords;
}
