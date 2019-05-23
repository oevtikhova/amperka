var termo = require('@amperka/thermometer')
.connect(A2);
var button = require('@amperka/button').connect(P4);

var count = 0;

function pressButton()
{
  count++;
  if (count>2) count = 0;
}

button.on('press', pressButton);

function temp()
{
  var celsius = termo.read('C');
  if (count == 0)
  {
  console.log(
  '<div style="font-size: 0.5em">',
  'Температатура',
  '</div>', celsius.toFixed(1), 'C');
  }  
  if (count == 1)
  {
  console.log(
  '<div style="font-size: 0.5em">',
  'Температатура',
  '</div>', (celsius+273).toFixed(1), 'K');
  }  
  if (count == 2)
  {
  console.log(
  '<div style="font-size: 0.5em">',
  'Температатура',
  '</div>', (celsius*9/5+32).toFixed(1), 'Ф');
  }  

}

setInterval(temp, 1000);