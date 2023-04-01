// hoisting 
//hoisting happens only for  function definition
//hoisting doesn't happen for function expression and arrow function it will give error


hello();

function hello(){
    console.log("hello world");
}
console.log(hello); //error
const hello = "hello world";
console.log(hello);

console.log(first); //undefined
var first = "hello";

console.log(first); //hello
