var pot = require('@amperka/pot')
.connect(A0);
var led = require('@amperka/led')
.connect(P1)
.turnOn();
var buzzer = require('@amperka/buzzer').connect(P5);

var button = require('@amperka/button').connect(P3);

function updateBrihtness() { 
  var val = pot.read();
  led.brightness(val);
}
button.on('press', function(){ led.turnOn();});


setInterval(updateBrihtness, 10);