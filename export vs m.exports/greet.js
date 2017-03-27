
/*
    Two diffrent object tow diffrend spots in memory. 
    module.exports still point to object, but exports point to a value then its a new spot in memory because we override it with new export funciton
    Mutate : to change something 
    for example, adding a method or property to an object means you've muted the object.
*/


exports = function(){
    console.log('Hello !');
}

console.log(exports);
console.log(module.exports);