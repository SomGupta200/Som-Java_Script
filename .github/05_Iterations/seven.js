// Reduce method
const myNums = [1,2,3,4]

const mytotal = myNums.reduce(function (acc , currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    
    return acc + currval
}, 0 ) // here initially 0 is current value we can also change it
console.log(mytotal);

// we can also use like that
const newTotal = myNums.reduce((acc , curr) => acc+curr,0)
console.log(newTotal);
