   /// Object properties and methods 
   var obj = {
       greet: "Hello world"
   }

   console.log(obj.greet);
   console.log(obj['greet']);



   var prop = 'greet'; // to have a string and a variable set to string  and use that variable in [ ] to get a particlar property are in object
   console.log(obj[prop]); // hello world 


// functions and arrays

var arr = [];

arr.push(function(){
    console.log('Hello world 1');
});
arr.push(function(){
    console.log('Hello world 2');
});
arr.push(function(){
    console.log('Hello world 3');
});

arr.forEach(function(item){
    item();
});