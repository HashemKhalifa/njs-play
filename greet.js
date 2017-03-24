var greet = function(){
    console.log('Hello');
}

module.exports = greet;

/*
 *  Require is a function, that you pass a 'path' too  
 * 
 * module.export is what the require function returns
 * 
 * It works because your code is actually wrapped in a function that is given these things as a function parameters.
 * 
 * what you write is actually the body of the function  
 */


/*
  When runs this code it wraps like this function on the fly 

(function (exports, require, module, __filename, __dirname){

    var greet = function(){
        console.log('Hello');
    }

    module.exports = greet;
});  

node invoked the function with '.appluy' passing the things that are expectied 
fn(moudle.exports, require, module, filename, dirname)

return module.exports; // because it pass by <reference /> 
*/
