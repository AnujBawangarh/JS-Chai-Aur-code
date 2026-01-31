// Filters in js

// filter all positive numbers

const mynum = [1,2,-3,-4,5,6,-7,-8,9];

let numbers = mynum.filter( (num) => num > 0 )
console.log(numbers);

// Filter strings having more than five characters.

const names = ['Krishna', 'Govinda', 'Gopijanavallabh', 'Madanmohan', 'Nandlal'];

const godnames = names.filter( (name) => name.length > 5  )
console.log(godnames);

// Filter all odd numbers

const num1 = [1,2,3,4,5,6,7,8,9,10]

const num2 = num1.filter( (odd) => odd % 2 != 0 )
console.log(num2);

// Filter all the ages greater than 18.

const people = [
    { name: "Krishna", age: 15 },
    { name: "Radha", age: 14 },
    { name: "Balaram", age: 18 },
    { name: "Shril Prabhupada", age: 70 }
];

const god = people.filter( (ages) => ages.age >= 18 )
console.log(god);

// Filter all non-empty strings from an array.

const arr1 = ['Radharaman', '', 'Gopijanavallabh', '!'];

const nomempty = arr1.filter( (empty) => empty.length >= 1 )
console.log(nomempty);

