// function constructors 
function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//[inherit from] when we use prototype that means we add some methods and proprites 
// to be available to all object created from this particular function constructors 

Person.prototype.greet = function(){
    console.log('Hello', this.firstName + ' ' + this.lastName)
}


// When we use New when excute this function it does a spcial thing of making "this" variable empty object and autmaticly return it /
var me = new Person ('Hashem', 'Khalifa');
var female = new Person('Lily', 'Khalifa');

console.log(me.__proto__);
console.log(female.__proto__); // what actual protoype is i'm dealing with....  Person { greet: [Function] }
console.log(female.__proto__ === me.__proto__);

me.greet();
female.greet();
