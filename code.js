var sonic = require('@amperka/ultrasonic')
.connect({trigPin : P10, echoPin: P11});

var buzzer = require('@amperka/buzzer')
.connect(P5);


setInterval(function(){
  sonic.ping(function(err, val){
if (val < 5){
  buzzer.turnOn();
 } else if (val < 20){
  buzzer.beep(0.1, 0.1);
 } else if (val < 50){
   buzzer.beep(0.2, 0.2); 
 }else{
   buzzer.turnOff();
  }
 }, 'cm');
}, 100);