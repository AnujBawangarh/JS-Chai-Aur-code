// This in JS.

let user = {
    name : "Krishna",
    designation : "King of Dwaraka",
    msg : function(){
        console.log(`${this.name} is the ${this.designation}`);     // Here this is used to tell the console to take input from the current context.
        
    }   
    
}
user.msg()
user.name = "Dwarkadhish"
user.msg()
console.log(this);

// this does not work inside a function only, which is not inside an object.

function radha(){
   let complextion = "Golden"
    console.log(this.complextion);    // this does not work in functions.
    
}
radha()

const name = function radha() {
    let complextion = "Golden"
     console.log(this.complextion);   
     
 }
 radha()

 const qualities =  () => {
    let complextion = "Golden"
     console.log(this.complextion);   
     
 }
 radha()


// Arrow function can be written in two ways.

// 1st
let King = (name) => {
return `The king of the Vrindavan is ${name}`     // This is called as explicit return 
}
console.log(King("Krishna"));


// 2nd 
let Queen = (name) => (`The Queen of Vrindavan is ${name}`)   // without using curly braces but we have used parenthesis so there is no need to write return.   It is also called as implicit return. Without using parenthesis we cannot define objects inside the function.
console.log(Queen("Srimati Radharani"));
