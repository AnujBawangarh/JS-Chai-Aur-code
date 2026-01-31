// // Parameters take values from arguments.



// function greet(name){
//     console.log(`Hello ${name}!`);
    
// }
// greet("Krishna")

// // Functions with multiple parameters.

// function addition(num1, num2){
//     console.log(num1+num2);
    
// }
// addition(5, 5)

// // Default parameters.

// function calculatearea(length, width = 10) {
//     let area = length*width; 
//     return area;
// }
// console.log(calculatearea(100));

// // Function expression.(another way of writing a function)

// const multiply = function(a,b){
//     return a*b;
// }
// console.log(multiply(5,5));

// // Rest/spread parameters.

// function calculatecartprice(...num1){
//     return num1;
// }
// console.log(calculatecartprice(200,300,400,500,600));


// // How to handel a object in functions.

// const user = {
//     name : "Anuj",
//     age : 21,
//     course : "CSE"
// }

// function handelObject(anyobject){
//     console.log(`Hare krishna!, my name is ${anyobject.name} and my age  is ${anyobject.age}`);
//     }
// handelObject(user)

// // How to handle arrays in functions.

// let mynewArray = [1,2,3,4,5,6,7,8,9]

// function handelarray(getarray) {
//     return getarray[5]
// }
// console.log(handelarray(mynewArray));

// // or 

// function handelarray(getarray) {
//     return getarray[5]
// }
// console.log(handelarray([1,2,3,4,5,6,7,8,9]));

// Javascript functions assignment

// 1. creating a greeting msg
function greet(name){
    console.log(`My name is ${name}`);
}
greet("Anuj")

// 2.sum of two numbers
function addition(num3, num4){
    console.log(num3+num4);
    console.log(typeof(num4));
}
addition(5,5)

// 3.Check if the number is even or odd.
function Check(num5){
   if(num5 % 2 === 0){
    console.log("The number is even.");
   }
   else{
    console.log("The number is odd.");
   }
}
Check(10)

// 4.Finding factorial of a number.
function factorial(number1){
    if (number1 === 0) return 1;
    return number1 * factorial(number1 - 1);
}
console.log(factorial(10));