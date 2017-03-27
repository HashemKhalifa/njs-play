// Nodejs can read objects from json as javascript objects

var greetings = require('./greeting.json');

var greet = function (){
    console.log(greetings.en);
}


module.exports = greet;