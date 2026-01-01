// Singleton -> When we create an object by the constuctor.
//Object.create()


// ---- Symbol -----//
const mySym = Symbol("Key1")
// Literal
const JsUser = {
    name: "Som",
    "fullName" : "Som Gupta",
    [mySym]: "myKey1",   // Correct way to access the symbol in the object
    Age: 20,
    Location: "Gwalior",
    email: "somgupta95894@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

console.log(JsUser.Location);  // First way to access the object
console.log(JsUser["email"]);  // Second way to access the object
// Thats the correct way
console.log(typeof JsUser[mySym]); // in there is no need to add ("")
// bcz mySym is an Symbol.

// How to update the data of an object
JsUser.name = "Dhruv"
console.log(JsUser["name"]);
 
// Freeze -> no change in the object
// Object.freeze(JsUser);
// JsUser.name = "Som"  // no change happen
// console.log(JsUser);  // No error -- No change

JsUser.greeting = function(){
    console.log("Hello js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.Location}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

