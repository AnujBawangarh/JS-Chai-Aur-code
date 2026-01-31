// basic array operations 
const arr1 = ["Apple", "Grapes", "Bimba"]
console.log(arr1);

console.log(arr1.push("Mango"));    // string is defined by "" because js identifies the datatype.
                                    // any time we perform some dot operation we have to again log the variable to print updated value.
console.log(arr1);

console.log(arr1.shift());
console.log(arr1);

console.log(arr1.unshift("Papaya"));
console.log(arr1);


// Iteration through arrays
const arr2 = [1,2,3,4,5]
console.log(arr2);

// Finding elements
let colors = ["blue", "Green", "Yellow", "White", "Pink"]
console.log(colors.includes("blue"));
console.log(colors.indexOf("Green"));
console.log(colors.at("03"));
console.log(colors);

// Filtering an array
let ages = [21,12,23,32,34,43,50]
let adults=ages.filter(ages => ages > 18);
console.log(adults);

// combining and slicing arrays
let marval_heros = ["Ironman", "Spiderman", "Captainamerica", "Hulk"]
console.log(marval_heros);

let DC_heros = ["superman", "Batman", "Flash"]
console.log(DC_heros);

let superheros = marval_heros.concat(DC_heros)
console.log(superheros);

let all_new_heros = [...marval_heros, ...DC_heros]     // spread function like a glass spreads after falling.
console.log(all_new_heros);

const arr3 = [1,2,[3,4,5],6,[7,8,[9,10,11],12],13]
const real_arr = arr3.flat(5)
console.log(real_arr);

// used in data scrapping
// IsArray, from and of methods
console.log(Array.isArray("Krishna"));
console.log(Array.from("Krishna"))

console.log(Array.of(100,200,300));

let score1 = 100
let score2 = 200 
let score3 = 300
console.log(Array.of(score1, score2, score3));




