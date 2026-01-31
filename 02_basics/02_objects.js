const mysym = Symbol("key1")
let person = {
    name : "Anuj",
    [mysym] : "mykey1",    // Always write symbols in [] to print it as a symbol. 
    age : 20,
    isStudent : true
}
console.log(person["name"]);
console.log(person.isStudent);

// How to declare symbols and print it.
console.log(person[mysym]);
console.log(typeof mysym);

// basics of objects
person.age = 21         // changed the values in objects
console.log(person["age"]);

//Object.freeze(person)
person.name = "Arun"
console.log(person["name"]);

// fuctions in the objects
person.greeting = function(){
    console.log("Hare Krishna JS user");
    }

person.greeting2 = function(){
    console.log(`Hare Krishna JS user ${this.name}`);
    
}
console.log(person.greeting());
console.log(person.greeting2());

// Objects in JS part 2
const obj1 = new Object()   // Singleton object
const obj2 = {}   // Non singelton object 

obj1.id = 22
obj1.name = "KRISHNA"
obj1.isLoggedIn = true

console.log(obj1);

let object = {
    email : "KRISHNA@goloka.com",
    fullname : {
        userfullname :{
            firstname : "Anuj",
            lastname : "Bawangarh"
        }
    }
}

console.log(object.fullname.userfullname.firstname);

// Combining the objects

objectone = {
    id : 22
}
objecttwo =  {
    Name : "Anuj"
}
objectthree = {
    course :"Btech"
}

const objectfour = {...objectone, ...objecttwo, ...objectthree}
console.log(objectfour);


