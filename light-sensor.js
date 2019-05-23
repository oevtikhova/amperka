var led = require('@amperka/led')
.connect(P1)
.turnOn();
var sensor = require('@amperka/light-sensor').connect(A2);


setInterval(function() {
  var luxes = sensor.read('lx');
  var level = 2 -luxes /50;
  led.brightness(level);
}, 10);