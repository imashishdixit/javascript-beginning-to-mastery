// arrow functions 
//arrow function takes this from as window which doesn't contain firstName and age that is why error will be thrown

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age); //undefined undefined
    }   
}

user1.about(user1);
