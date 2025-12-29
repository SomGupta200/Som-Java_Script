const marvel_heros = ["Thor" , "Ironman" , "Spiderman"];
const dc_heros = ["Superman" , "Batman" , "Flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// ---- Concat ----//
let a = marvel_heros.concat(dc_heros); 
//- It does not modify the original string 
// (strings in Java are immutable).
console.log(a);

// ---- Spread Operator -----//
const all_new_heros = [...marvel_heros , ...dc_heros];
//- Written as (...) spread operator
//- It expands an iterable (like an array, string, or object)
//  into individual elements.
//- Think of it as “unpacking” values.

console.log(all_new_heros);

// ---- Flat ----//
// Returns a new array with all sub-array
//  elements concatenated into it recursively
//  up to the specified depth.
const the_array = [1,2,3,4,[5,6,],7,[8,9,[10,11]]]
const real_array = the_array.flat(Infinity) 
console.log(real_array);

// ---- Array.from ---- //
//- It’s a static method on the Array class.
//- Purpose: Creates a new array from an 
// array-like or iterable object.

console.log(Array.from("SomGupta"));
  

// ---- Array.isArray ---- //
//- Checks whether a given value is an array.
//- Returns a boolean (true or false).
console.log(Array.isArray("som"));
