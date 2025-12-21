console.log("som");           // Day2

// 1.Primitive
 // There are 7 types : string , Number , Boolean , Null
 // , Undefined , Symbol , BigInt .

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 37439287745474389398n  // bigint number
console.log(typeof bigNumber);

 // Reference (Non - Primitive)
 // Array , Objects , Functions

// Array
 const heroes = ["shaktiman" , "naagraj" , "Bhisma"]
 //Object
 let myObj = {  // object declare inside the Curly Braces
    name:"som",
    age: 20,
    address:"Gwalior"
 }
 console.log(myObj);
 // function
 const myfunction=function(){
    console.log("Hello World");
 }
console.log(typeof myfunction);

 
 