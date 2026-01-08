// Rest operator (...) like as spread operator
// When you don’t know how many arguments a 
// function will receive:


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,500,800))


// in this example num1 = 1 , num2 = 2 , and the
// rest element means remains are goes to the
// num3.
function calculatePrice(num1 , num2 , ...num3){
    return (num3)
}
// console.log(calculatePrice(1,2,3,4,5,6));


// --- Use object in function ----//
const user = {
    username : "Som",
    price : 199
}
// in this we can access any object data
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user); // here you pass object by which you use 

// Another way to pass the object in the function
handleObject({  // just call the function and pass 
    username: "Dhruv",   // the object
    price : 389
})

// Arrays in the function
const mynewArray = [8,4,6,3,5]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mynewArray));

// Another way to pass Array in the function
// Direct
console.log(returnSecondValue([3,4,2,57]));
