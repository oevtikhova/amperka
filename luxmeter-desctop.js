var sensor = require('@amperka/light-sensor')
.connect(A2);


setInterval(function() {
  console.log(sensor.read('lx').toFixed(0), 'luxes');
}, 200);