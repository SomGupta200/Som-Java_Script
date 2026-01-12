// if

if (3 === `3`) {
  console.log("Executed");
}else{
    console.log("Nope");
}

// (===) it check the value and datatype

const score = 200;
if(score > 100){
    const power = "Fly";
    console.log(`User Power ${power}`);
}
    // console.log(`User Power ${power}`);  // Reference Error : bcz power
    // power is defined in the inside of the -> if (it has his scope)

// - var → Function or global scope 
// - let → Block scope
// - const → Block scope (cannot be reassigned)


// Falsy Value
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// Truthy Value
// "0" ,"false" , " " , [] , {} , function(){}

// Nullish Coalescing Operator (??) : null , undefined
// The ?? operator in JavaScript is called the Nullish Coalescing Operator.
//  It’s used to provide a default value when the left-hand side
//  is either null or undefined.

let val1;
val1 = null ?? 9   // it use to set the default value when we face
// null , undefined
let val2 = undefined ?? 3
console.log(val1);
console.log(val2);


// Ternary Operator
// Syntax -> condition ? true : false

const tea = 100
tea >= 80 ? console.log("Less than 80") : console.log("More than 80");

