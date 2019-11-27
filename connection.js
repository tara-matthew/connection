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
    translate(width / 2, height / 2);
    scale(1);
    drawCircle(400, 0, 0);
    drawCirclePoints(250,400,0,0);
}

function drawCircle(radius, centreX, centreY) {
    frameRate(60);
    stroke(0);
    strokeWeight(4);
    noFill();

    newX = centreX + radius * cos(ang);
    newY = centreY + radius * sin(ang)


    if (ang < 2*PI) {
        point(newX, newY);
        print(ang);
        ang += 2*PI/(radius);
    }
}

function drawCirclePoints(points, radius, centreX, centreY) {
    strokeWeight(1);
    var slice = 2 * PI / points;
    for (var i = 0; i < points; i++) {
        angle = slice * i;
        newX = centreX + radius * cos(angle);
        newY = centreY + radius * sin(angle);
        ellipse(newX, newY, 10, 10);
    }
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
