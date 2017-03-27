function Greetr(){
    this.greeting = 'New function constructor man!!!! try to understand';
    this.greet = function(){
        console.log(this.greeting);
    }
};

module.exports = Greetr;