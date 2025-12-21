const name = "Som"
const age = 20
  
//console.log(name + age);    // that is outdated form

//String Interpolation with backtick(` `)
console.log(`My name is ${name} and my age is ${age}`);

//Another form for declaration the string
const gameName = new String('Mrsom-gupta-gwalior')
console.log(gameName[2]);     // Output -> s

console.log(gameName.length);  // Output -> 5

console.log(gameName.toUpperCase()); // it convert the string into uppercase

console.log(gameName.charAt(2));   // Output -> s

console.log(gameName.indexOf('o'));  // Output -> 3

const newString = gameName.substring(0,4)
console.log(newString);       // Output -> Mrso

const anotherString = gameName.slice(-8,4)
console.log(anotherString);   // Output -> Mrso

const stringOne = "   som    "
console.log(stringOne); // Output with Space
console.log(stringOne.trim());    // Output without space

const url = "https://SomGupta.com"   // for replace something with something
console.log(url.replace('Som' , 'Dhruv'))  // .replace('SearchValue' , 'ReplaceValue')

console.log(url.includes('Gupta'));

console.log(gameName.split('-'));
