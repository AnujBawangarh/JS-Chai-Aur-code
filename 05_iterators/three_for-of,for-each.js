// 1st question.
const arr1 = ["Apple", "Banana", "Cherry", "Bimba", "Mango"]
for(const fruits of arr1){
    console.log(fruits);
}

// 2nd question.
const arr2 = [10,20,30,40,50]
let answer = 0;
for(const num of arr2){
    answer = answer + num;
}
console.log(answer);

// 3rd question

let arr3 = ["red", "yellow", 'green', 'blue', "white"]
let upper = [];

for(const uppercase of arr3){
    upper.push(uppercase.toUpperCase());
    }
    console.log(upper);

// 4th question

const arr4 = [1,2,3,4,5,6,7,8,9,10]
let num = []
for(let even of arr4){
  if (even % 2 === 0){
    num.push(even)
  }
}
console.log(`The even numbers are: ${num}`);

// 5th question

const movie = {
    title: "The Lion King",
    year: 1994,
    rating: 8.5
};
for(const values of Object.values(movie)){
    console.log(values);
    
}

// Map in JS

const God = new Map();

God.set("Name", "Krishna");
God.set("Age", 15);
God.set("Village", "Vrindavan");

console.log(God);


    

