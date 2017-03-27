/*
    Revealing module pattern:
    Exposing only the properties and methods you want via an returned object
*/

var greeting = "Hello world greeting 5";
function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}