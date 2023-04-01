// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
//To create a variable with different key we can use 
let var1 = '';

const {bandName : var1} = band; // 
console.log(var1) // led zeppline


console.log(bandName);
console.log(restProps);  // { year:1968 , anotherFamousSong : "Kashmir"};
