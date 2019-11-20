function setup() {
    createCanvas(400,400);

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
