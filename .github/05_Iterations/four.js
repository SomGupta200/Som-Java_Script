const myobject = {
    js : "javascript",
    cpp : "c++"
}
// forin loop with object
for (const key in myobject) {
    // key -> {key} , value ->{myobject[key]}
   console.log(`${key} shortcut is for ${myobject[key]}`);
}

//forin loop with array
const arr = ["som" , "dhruv" , "tanya"]
for (const key in arr) {
   console.log(key , arr[key]);  // key , value
}
