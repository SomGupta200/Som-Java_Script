const arr = [1,2,3,4,5]
// forof loop in arr
for (const num of arr) {
    // console.log(num);
}

// forof loop in variable
const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(greet);
}

const map = new Map()
// Only contains unique element
map.set('IN' , "India")
map.set('FR' , "France")
map.set('RS' , "Russia")

// forof loop in map
for (const [key , value] of map) {   // for printing the key & value pair both
    console.log(key , ' :-' , value);
}
