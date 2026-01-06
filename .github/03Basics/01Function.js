// -----Functions----- //

function myName(){
    console.log("Som Gupta");
    console.log("Dhruv Gupta");
}
myName // this is function reference 
myName()  // function execution

function addTwoNumbers(number1 , number2){
   console.log(number1 + number2)
}
addTwoNumbers(7,5)

function loginUserMessage(username){
    if(username === undefined){ // if(!username)
        // also work both condition same
        
        console.log("Please enter a username ");
        return 
    }
  return `${username} just logged in`
}

console.log(loginUserMessage())  // empty = undefined