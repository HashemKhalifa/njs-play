// function statment

function greeting (){
    console.log("Hello");
} 
greeting();

// function are first- class
function greeting2 (fn){
    fn()
}
greeting2(greeting);


// function expression

var greetMe = function(){
    console.log("Hi Hashem");
}
greetMe();

// first class again :))
greeting2(greetMe);

// Use a function expression on the fly

greeting2(function(){
    console.log("Hello Hashem!")
});