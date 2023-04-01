// block scope vs function scope 


// let and const are block scope
// var is function scope  ///it is accessible if the fucntion is running or in function scope

if(true){
    var firstName = "harshit";
    console.log(firstName);
}

console.log(firstName);

function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp(); 

 console.log(firstName); //error
