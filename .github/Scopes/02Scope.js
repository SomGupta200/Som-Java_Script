// Nested Scope

function one(){
    const userName = "Som"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
   // console.log(website); // Reference Error : website is not defined
    two()
}
one() // it execute first bcz when it get execute 
// then the inner function two get execute

addOne(5) // No error
function addOne(num){
    return num+1
}


addTwo(7) // Error : Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}