// filter method 
//it gives the array of values which satisfy the condition

const numbers = [1,3,2,6,4,8];



const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);
