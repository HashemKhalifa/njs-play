// pass by value

function change (b){ // 'b' become a copy of value when changed b it changed in diffrent spot in memory diffrent to 'a' spot poiniting to
    b = 2;
}

var a = 1; // primitive value 
change(a);
console.log(a); // 1  


/* pass by reference
    'd' paramter point to the same memory location 'c' point to.
    when it pass in to an object i can add proprity and change proprity in object and it will be reflected outside of the function 
    because it pass by refrence.
*/
function changeObj(d){
    d.prob1 = function(){};
    d.prob2 = {};
}

var c = {};
c.prob1 = {};
changeObj(c);

console.log(c);