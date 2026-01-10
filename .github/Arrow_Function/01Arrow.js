// This and Arrow Function
// For understanding about the (this) we  go the object

const user = {
    userName: "som",
    price : 2999,

    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to our website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.userName = "Dhruv"
user.welcomeMessage()

console.log(this);  // returns -> {} empty object
// Value of this
// Global object (window in browsers, global in Node.js)


function chai(){
    let userName = "SomDhruv"
    console.log(this.userName); // Undefined
}
chai()

const code = () =>{
    let userName = "SomGupta"
    console.log(this);   // Undefined
}
code() // {}

// Implicit return
// Implicit return (no curly braces, no return keyword)
// It is for single expression code

// const addTwo = (num1 , num2) => num1+num2
// Both are Same
const addTwo = (num1 , num2) => (num1+num2)

// Object in arrow function
// Implicit return
const add = (num1 , num2 , num3) => ({username : "Som"})
// it is compulsary to wrap the object 
// in parenthesis ()
console.log(add(1,2,3))