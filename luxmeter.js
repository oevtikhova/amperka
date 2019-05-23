var sensor = require('@amperka/light-sensor')
.connect(A2);


setInterval(function() {
  var lx = sensor.read('lx').toFixed(0);
  var time = getTime().toFixed(0);
  console.log(time, 'sec', '->', lx, 'luxes');
}, 1000);