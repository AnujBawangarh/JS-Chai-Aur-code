// How to create a promise?
const promiseOne = new Promise(function(resolve, reject){
setTimeout(function(){
    console.log('Async task is completed');
    resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

/////////////////////
// How the parameters of resolve method is returned by function in the then method?
const PromiseTwo = new Promise(function(resolve, reject){
setTimeout(function(){
    resolve({Godname:"Krishna", QueenName:"Radharani", Home:"Vrindavan"})
}, 1000)
})

PromiseTwo.then(function(God){
console.log(God);
})

/////////////////////
const PromiseThree = new Promise(function(resolve, reject){
let error = false;
if(!error){
  resolve({NameOfFoundation:"ISKCON", FounderAcharya:"ShrilPrabhupada"})  
}
else{
    reject("ERROR:Promise Rejected")
}
})

PromiseThree.then(function(name){
console.log(name);
console.log(name.FounderAcharya);
return name
}).then(function(username){
console.log(username);
}).catch(function(error){
console.log(error);
})

////////////////////

const PromiseFour = new Promise( (resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if(!error){
          resolve({NameOfFoundation:"ISKCON", FounderAcharya:"ShrilPrabhupada"})  
        }
        else{
            reject("ERROR:Promise Rejected")
        }
    }, 1000)
})

async function PromiseConsumed() {
    try {
        const resolve = await PromiseFour;
        console.log(resolve);
        
    } catch (error) {
        console.log(error);
        
    }
}
PromiseConsumed()

//////////////////////

const response = fetch("https://www.youtube.com/watch?v=NJwRQgsu1Q8&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=40" )
.then((response) => {
    return response.json
}).then( (data) => {
console.log(data);
})
.catch( (error) => console.log(ERROR) )