var buzzer = require('@amperka/buzzer').connect(P5);
var led = require('@amperka/led').connect(P1);
var button = require('@amperka/button').connect(P3);

button.on('press', function(){ buzzer.turnOn(); led.turnOn();});
button.on('release', function(){ buzzer.turnOff();led.turnOff();});