const person = {
    name : "Krishna",
    age : 15,
    isStudent : true
}

console.log(person.age);
console.log(person.name);

person.hobby = "Dancing"
console.log(person);

// Modify the properties
const car = {
      brand : "BMW",
    model : "BMW X7",
    year : 2023
};

car.year = 2024   // updated the year
car.color = "White" // added the property
console.log(car);

// Nested objects

const student = {
    name : "Anuj",
    age : 20,
    subject : ["Maths", "science", "Sanskrit"],
    address : {
        street : "bajaj nagar road",
        city : "Nagpur",
        pincode : 440010
    }
}
student.subject.push("History")
console.log(student);
console.log(student.address.city);


// key, values, entries 

const movie = {
    title : "Narsimha: The lion god",
    category : "spiritual",
    ratings : 10
}

console.log(Object.keys(movie));
console.log(Object.values(movie));
console.log(Object.entries(movie));

// Deleting propeties

let employee = {
    name : "Krishna",
    designation : "Project Manager",
    salary : 50000
}

console.log(employee);
delete employee.salary
console.log(employee);

// Object destructuring 
const god = {
    name : "Krishna",
    age : 15,
    residence : "Vrindavan",
    Mother : "Yashodamayi",
    Father : "Nandmahraj"
}

const {Mother, Father} = god;            // simple destructuring
console.log(Mother);
console.log(Father);


const {Mother: mother, Father:father} = god;   // Renaming keys while destructuring
console.log(mother);                             
console.log(father);

const {name, complextion = "Darkblue"}= god;    // Providing default values
console.log(name);
console.log(complextion);


