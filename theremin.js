var buzzer = require('@amperka/buzzer')
  .connect(P5)
  .turnOn();
var sensor = require('@amperka/light-sensor')
.connect(A2);
var button = require('@amperka/button')
.connect(P3);

button.on('press', function() {
buzzer.toggle();
});

setInterval(function() {
  buzzer.frequency(800 * sensor.read('lx'));
}, 10);