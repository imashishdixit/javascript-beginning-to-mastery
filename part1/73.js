

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}
//call
about.call(user1,"guitar","moazrt"); // call takes arugment as variable
// apply
about.apply(user1, ["guitar", "bach"]); //apply takes value as an array
//bind
const func = about.bind(user2, "guitar", "bach"); //bind returns a function and we can call it later
func();
