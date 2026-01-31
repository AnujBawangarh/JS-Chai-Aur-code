// print numbers from 1 to 10

for(let num = 1; num <= 10 ; num ++){
    console.log(num);
}

// sum of the numbers

let range = 6;
let sum = 0;
for(i = 1; i <= range ; i++){
    sum += i;
}
console.log("Sum:", sum);

// Print even numbers

for(num = 1; num <= 20; num++){
    if(num % 2 === 0){
        console.log(`The even number is ${num}`);
    }
}

// Multiplication table

let number = 5;
for(i = 1; i <= 10; i++){
   console.log(`${number}x${i}=${number*i}`);
}


