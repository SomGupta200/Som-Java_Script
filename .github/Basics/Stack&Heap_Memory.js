// Stack (Primitive)
//  in stack primitive it sends the duplicate file instead of original 
//  if you change or updating something in the file then there is nothing change in the original.
let myYoutubename = "somgupta.com"

let anothername = myYoutubename
anothername = "somgupta"
console.log(anothername);
console.log(myYoutubename)

// Heap (Non - primitive)
// it works totally differnt as compare to stack , it send the original 
// if you update or do any change then the change also occur in the 
// original.
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
} 

let userTwo = userOne 

userTwo.upi = "som@ybl"
console.log(userTwo.upi);
console.log(userOne.upi);

