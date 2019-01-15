// **********  Exemple 1   **************

var fs = require('fs');

var rs = fs.createReadStream('./demofile.txt');

rs.on('open', function () {
    console.log("The File Open")
})



// ************  Exemple 2 *****************


var events = require('events');
var eventEmitter = new events.EventEmitter();

// create an event handler
var myEventHandler = function () {
    console.log('I Head a scream !');
}

// Assign the event handler to an event
eventEmitter.on('csream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('csream')

