var trigger  = require('@amperka/button')
  .connect(P3);

var buzzer = require('@amperka/buzzer')
  .connect(P5)
  .frequency(50);

var light = require('@amperka/led')
  .connect(P1);

var barrier = require('@amperka/servo')
  .connect(P13)
.write(90);

var closed = false;

trigger.on('press', function() {
  closed =!closed;
  if(closed){
    buzzer.beep(1, 0.5);
    light.blink(1, 0.5);
    barrier.write(0);
  }
  else {
    buzzer.turnOff();
    light.turnOff();
    barrier.write(90);
  }
  
});
