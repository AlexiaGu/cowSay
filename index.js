const cowsay = require('cowsay');

const information = require('./information');

const myMessage = `My name is ${information.myName} and I'm from ${information.myCampus} campus`

console.log(cowsay.say({
  text: myMessage,
  e: 'oO',
}));
