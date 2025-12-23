//Numbers -------
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2)); // Output -> 100.00

const otherNumber = 123.78
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

console.log(hundreds.toLocaleString("en-IN",{ style: "currency", currency: "INR" }));

console.log(hundreds.toLocaleString("en-US",{ style: "currency", currency: "USD" }));

//Maths -------

console.log(Math.abs(-7));    // abs only convert the negative value into positive value.
console.log(Math.round(4.6));     // Round-off the value
console.log(Math.ceil(4.1));   // return the top value 
                               // Output -> 5
console.log(Math.floor(4.9));  // return the bottom value
                               // Output -> 4

console.log(Math.floor(Math.random()*10 )+ 1); // .random generate the random value 

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);
