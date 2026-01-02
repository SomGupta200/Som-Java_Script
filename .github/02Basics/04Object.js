// const tinderUser = new Object()  // Singleton object
const tinderUser = {} // Non - singleton object
// Both are same

tinderUser.id = "123abc"
tinderUser.name = "Som"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);

const regularUser = {  // object inside the object
    email: "Som@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Dhruv",
            lastname: "Gupta"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}
 
// const obj4 = {obj1 , obj2 , obj3}  // ❌ wrong declaration

// const obj4 = Object.assign({} , obj1 , obj2 , obj3) // it is
//  mandatory to pass the empty object
// - Simple way to merge or clone objects.

const obj4 = {...obj1 , ...obj2 , ...obj3}  // Instead of assign
// we can also use thee spread (...) operator
// console.log(obj4);

const users = [  // Array of Object
    {
        id: "1",
        gmail: "s@gamil.com"
    },
    {
          id: "1",
        gmail: "u@gamil.com"
    },
    {
          id: "1",
        gmail: "p@gamil.com"
    },
]

// console.log(users[0].gmail) 
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // output is in the array datatype
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // return the key,value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // it is used 
// to check the value is exist or not
