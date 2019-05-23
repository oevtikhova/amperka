var sdCard = require('@amperka/card-reader').connect(P8);
var player = require('@amperka/ringtone').create(A2);
var shuffle = require('@amperka/button').connect(P12);

shuffle.on('click', function() {
player.stop();
var melody = sdCard.readRandomFile('/music');
player.play(melody);
});

  shuffle.on('hold',function(){
player.stop();
});