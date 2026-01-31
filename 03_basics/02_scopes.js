if (true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a,b,c);    // local scope.
    
}
console.log(c);   // The problem is that if a variable is declared under a scope then it should not execute if the log is done outside the scope. The problem is that "var" allows to print values if it is logged outside the scope which is not at all good.

let a = 100;
console.log("Inner:", a);  // Global scope.

// levels of scope.

function user(){
    username = "Krishna",
    spousename = "Radharani" 
    console.log(spousename);
    

    function child(){
        childname = "Anuj"
        console.log(username);
        console.log(spousename);
        
    }
    child()
    // console.log(childname);
}
user()

// Hoisting in js

console.log(one(5));

function one(num1){
    return num1 + 1;
}

// console.log(two(5));     // Here we cannot call a function outside a function because fuction is stored in a variable.

const addition = function two(num2){
    return num2 + 2;
}
