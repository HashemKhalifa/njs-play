/* 
    I use exports if i want to only if i mutate the object.

    Recommendation : Use module.exports
*/



var greet = require('./greet');
var greet2 = require('./greet2');

greet2.greet();