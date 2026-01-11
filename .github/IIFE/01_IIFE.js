// Immediately Invoked Function Expression (IIFE)
// What is an IIFE?
//An IIFE is a function expression that is executed as soon as it is defined.

//The function is wrapped in parentheses (function(){...}) to make
//  it an expression, and then followed by () to invoke it immediately.

//Syntax :-

function chai(){  // Normal function
    console.log(`DB connected`);
}
chai();

// Note -> it is compulsary to complete the code with semicolon ;

(function name(){   // IIFE
    console.log("IIFE is ready to start");
})();

//Easy Way to Identify
//- Agar function name ke saath define hota hai aur baad mein call hota hai → Normal.
//- Agar function brackets ke andar hai aur turant () ke saath execute hota hai → IIFE.


// IIFE in Arrow Function
( (name) => {
    console.log(`Hello this is IIFE Arrow function -> ${name}`);
} )('Som')