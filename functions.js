let ang = 0;
let circAng = 0;

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
