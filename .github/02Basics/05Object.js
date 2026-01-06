const course = {
    conursename : "Physics",
    price : "7999",
    courseInstructor : "Som"
}
// console.log(course.courseInstructor);

// Traditional way
//const money = course.price;


// ------ Deconstructing ------ //
//- Makes code shorter and cleaner.
//- Helps avoid repetitive property access.
//- Useful in function parameters when working with objects.

// Deconstructing way 
const {courseInstructor : instructor , price} = course
console.log(instructor);

