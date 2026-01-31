// Reduce in JS.

const arr1 = [1,2,3,4,5,6,7,8,9,10]

const sum = arr1.reduce( (total, num) => total + num, 0);
console.log(sum);

// Concatenate all strings.

const statement = ['Krishna', ' is the', ' Supreme personality', ' of godhead'];

const words = statement.reduce( (total, god) => total + god);
console.log(words);

// Finding the largest number.

const num1 = [1,2,3,4,5,12,23,34,51,6,7,8,9];
const largest = num1.reduce( (total, value) => (value > total ? value : total));
console.log(largest);


