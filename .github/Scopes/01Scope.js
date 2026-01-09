// Scopes

// let a = 10
// const b = 20
// var c = 30

if(true){
    let a = 10
    const b  = 20
    var c = 30
}

console.log(a);   // Reference Error : a is not defined
console.log(b);  // Reference Error : b is not defined
console.log(c);  // It will execute
// that why we are not using the var.

