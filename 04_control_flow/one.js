// if statement in js

let age = 30;
if (age >= 18){
    console.log("You are eligible to vote");
    }
else {
    console.log("You are not eligible to vote");
    
}

// check for even or odd
let A = 5;
if (A % 2 === 0){
console.log("The number is even");
}
else{
    console.log("The number is odd");
}

// positive, negative or zero

let number = -45;
if (number != 0){
    if (number > 0){
        console.log("The number is positive");
        }
    else {
        console.log("The number is negative");
        
    }
}
else {
    console.log("The number is zero");
    
}

// Find the largest number.

let num1 = 30, num2 = 40, num3 = 25;
if (num1 > num2 && num1 > num3){
    console.log(`The largest number among three is ${num1}`);
}
else if (num2 > num1 && num2 > num3){
    console.log(`The largest number among the three is ${num2}`);
}
else {
    console.log(`The largest number among the three is ${num3}`);
    
}

// password checker

let password = "@vrda123";
if (password === "@vrindavan123"){
    console.log("Access granted");
}
else {
    console.log("Access denied");
    
}

// check a leap year

let year = 2025;
if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0){
    console.log(`The ${year} is the leap year.`);
}
else {
    console.log(`The ${year} is not the leap year.`);
    
}

// Grade calculator

let marks = 46;
if (marks >= 90){
    console.log("A Grade");
}
else if (marks >= 75 && marks < 90){
    console.log("B Grade");
}
else if (marks >= 50 && marks < 75){
    console.log("C Grade");
}
else {
    console.log("Fail");
}


