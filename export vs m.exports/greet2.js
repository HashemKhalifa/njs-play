/*
    the output witll be greet as a function
    because we Mutate the object 
*/

exports.greet = function(){
    console.log('Mutate');
}

console.log(exports);
console.log(module.exports);