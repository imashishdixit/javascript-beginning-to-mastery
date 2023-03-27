// undefined 
// null

/*
-> varibale defined by const has to be intialized at the time of definition
->
*/
let firstName;
console.log(typeof firstName); //undefined
firstName = "Harshit";
console.log(typeof firstName, firstName); // string harshit

let myVariable = null;
console.log(myVariable); // null
myVariable = "harshit";
console.log(myVariable, typeof myVariable); harshit string
console.log(typeof null); //object

// bug , error 

// BigInt
let myNumber = BigInt(12); 
let sameMyNumber = 123n; //big int
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);
