var sdCard = require('@amperka/card-reader').connect(P8);
var sdCard = require('@amperka/ringtone').connect(A2);
var sdCard = require('@amperka/button').connect(P12);

shuffle.on('click', function(){
player.stop();
var melody = sdCard.readRandomFile('/music');
player.play(melody);
});

  shffle.on('hold',function(){
player.stop();
});