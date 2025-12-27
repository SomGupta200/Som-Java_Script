// Dates
let myDate = new Date()

console.log(myDate); // Current date
console.log(myDate.toString()); // convert into the simple order
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());


let myCreatedDate = new Date(2025 , 11 , 25)
console.log(myCreatedDate.toDateString());

// In javascript the month start with the 0 -> Jan , 1 -> Feb ...
console.log(Date.now()); // Date in millisecond
console.log(Math.floor(Date.now()/1000)); // Date in second
console.log(myDate.getMonth()+1);  // Only for month
// we add 1 because the user is not get confuse

myDate.toLocaleString('default' , {
    weekday: "long"
})