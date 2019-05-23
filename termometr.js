var thermometer = require('@amperka/thermometer')
.connect(A4);


setInterval(function() {
  var celsius = thermometer.read('C');
  console.log(
    '<div style="font-size:0.5em">',
    'Temperature',
    '</div>',
     celsius.toFixed(1),'C');
}, 200);