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

    drawCirclePoints(5, 150, 300, 300);
}

function draw() {
    ellipse(300, 300, 300, 300);
    ellipse(450, 300, 10, 10);
    ellipse(346.3525491562421, 442.658477444273, 10, 10);
    ellipse(178.6474508437579, 388.167787843871, 10, 10);
    ellipse(178.6474508437579, 211.83221215612906, 10, 10);
    ellipse(346.3525491562421, 157.34152255572695, 10, 10);

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
