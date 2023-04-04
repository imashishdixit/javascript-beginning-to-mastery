// let and const are hoisted but unitialized due to which error happends only var and function 
console.log(myFunction);

var myFunction = function(){
    console.log("this is my function");
}

console.log(myFunction);
