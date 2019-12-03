let ang = 0;
function setup() {
    createCanvas(600,600);

    heading = createElement(`p`, 'How many people?');
    heading.position(20,5);

    input = createInput();
    input.position(150,20);

    button = createButton('Tell me pls');
    button.position(input.x + input.width + 10, 20);
    button.mousePressed(function() {
        const numOfPeople = int(input.value());
        getConnections(numOfPeople);
    });

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

function drawCircle(radius, centreX, centreY) {
    frameRate(60);
    stroke(0);
    strokeWeight(5);
    noFill();

    newX = centreX + radius * cos(ang);
    newY = centreY + radius * sin(ang)

    if (ang < 2*PI) {
        point(newX, newY);
        ang += 2*PI/(radius*1.45);
    } else {
        drawCirclePoints(10,280,0,0);

    }
}

function drawCirclePoints(points, radius, centreX, centreY) {
    strokeWeight(1);
    var slice = 2 * PI / points;
    if (circAng < points) {
        if (circAng % 2 == 1) {
            stroke('rgb(0,255,0)');
            fill('rgb(0,255,0)');
        } else {
            stroke('rgb(255,0,0)');
            fill('rgb(255,0,0)');
        }
        angle = slice * circAng;
        let newX = centreX + radius * cos(angle);
        let newY = centreY + radius * sin(angle);
        ellipse(newX, newY, 7, 7);

        circAng++;
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

function getConnection() {
    const numOfPeople = input.value();
    print(numOfPeople);
}

/**
Given a number of people, the function returns how many connections they have
**/

function getConnections(numOfPeople) {
    var connections = [];
    function connection(numberOfPeople) {

        if (numberOfPeople == 1) {
            return 0;
        }

        let returnVal = connection(numberOfPeople-1) + numberOfPeople-1;
        connections.push(returnVal);
        return returnVal;
    }

  connection(numOfPeople);
  print(connections);
  return connections;

}
