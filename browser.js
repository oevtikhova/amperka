var SSID = 'имя_твоего_wi-fi';
var PASSWORD = 'пароль_твоего_wi-fi';

 var sdCard = require('@amperka/card-reader').connect(P8);
 var server = require('@amperka/server').create();

server.on('/', function(req,res) {
var content = sdCard.readFile('race.html');
res.send(content);
});

var wifi = require ('@amperka/wifi').setup(function(err){
  wifi.connect(SSID, PASSWORD, function(err) {
   wifi.getIP(function(err,ip){
    server.listen();
    print('Game is ready! http://'+ip+'/');
  });
 });
});
