// Switch case statement

let day = 4;
switch (day){
  case 1: 
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("invalid input");
    break;  
}

// Month name

let month = 10;
switch (month){
    case 1:
    console.log("January");
    break;
    case 2:
    console.log("February");
    break;
    case 3:
    console.log("March");
    break;
    case 4:
    console.log("April");
    break;
    case 5:
    console.log("May");
    break;
    case 6:
    console.log("June");
    break;
    case 7:
    console.log("July");
    break;
    case 8:
    console.log("August");
    break;
    case 9:
    console.log("September");
    break;
    case 10:
    console.log("October");
    break;
    case 11:
    console.log("November");
    break;
    case 12:
    console.log("December");
    break;
    default:
        console.log("Invalid Input");
        break;
    
}

// Traffic signal indicator

let signal = "red";
switch(signal){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid input");
        break;
}

// Arithmetic operation

let num1 = 15;
let num2 = 6;
let operator = "+";

switch(operator){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    default:
        console.log("Invalid input");
        break;
}

// Grade description

let Grade = "C";

switch(Grade){
    case "A":
        console.log("Excellent performance");
        break;
    case "B":
        console.log("Good performance");
        break;
    case "C":
        console.log("Average performance");
        break;
    case "D":
        console.log("Poor performance");
        break;
    case "E":
        console.log("Fail");
        break;
    default:
        console.log("Invalid input");
        break;
}

// Fruit price finder

let Fruit = "Bimba";

switch(Fruit){
    case "Apple":
        console.log("The price of apple is 80 rs per kg.");
        break;
    case "Bimba":
        console.log("The price of Bimba is 300 rs per kg.");
        break;
    case "Mango":
        console.log("The price of Mango is 100 rs per kg.");
        break;
    case "Banana":
        console.log("The price of Banana is 30 rs Dozen.");
        break;
    case "Pineapple":
        console.log("The price of Pineapple is 90 rs per kg.");
        break;
    default:
        console.log("Invalid input");
        break;
}
