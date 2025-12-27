// Array
// it is an object
//JavaScript arrays are resizable and can contain a mix of different data types.
//Declaration 1
const myArr = [0,3,5,6,"som"]
console.log(myArr);
console.log(myArr[3]);  // Access element by index
myArr[7] = "Dhruv" //Increasing the length 
// extends the array by adding empty slots 
// without creating any new elements
//  — not even undefined
console.log(myArr.length);
console.log(myArr);

//Array declaration 2
const myHeroes = new Array("shaktiman" , "Vishnuji");
console.log(myHeroes);
 
//Array Method
myHeroes.push(1)  // to add the element
myHeroes.pop()  
myHeroes.pop()  // it remove elements from backward 
console.log(myHeroes);
myHeroes.push(9)
myHeroes.push(3)
myHeroes.push(7)
  
myHeroes.unshift(6)  // add the element into the first position
myHeroes.shift() // remove the element from the first position
console.log(myHeroes);

console.log(myHeroes.includes(5)); // check element is present or not
console.log(myHeroes.indexOf(9)); // find the index of an element

const newArr = myHeroes.join()  // join two arrays
// change the type into the string
console.log(newArr);
console.log(typeof newArr);

// --- Slice & splice method -----//

 console.log("A" , myHeroes);
const myn1 = myHeroes.slice(1,3) // in slice we do not include the ending position
// in slice the original array is not change
console.log(myn1);

console.log("B" , myHeroes);
const myn2 = myHeroes.splice(1,3) // in splice it includes the ending position
// in splice it change the original array 
console.log(myn2);
console.log("c",myHeroes);
