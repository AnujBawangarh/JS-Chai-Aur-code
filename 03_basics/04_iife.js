// IIFE 

(function user() {
    // This is named iife.
    name = "Krishna",
    fathername = "Nandmaharaj"
    console.log(`The name of Krishna's father is ${fathername}`);
    
})();   // iife dont know where to end the iife code so we have to use the semicolon to end the code.

((name) => {
    // simple iife
    console.log(`${name} is our only wellwisher, guide and our best friend.`);   
    
}) ('Krishna')