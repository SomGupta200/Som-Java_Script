// for
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is best");
        
    }
    console.log(element);
    
}
// console.log(element);   // Reference Error : element is not defined
// it is not accessible outside the loop

for(let i = 0 ; i <= 10 ; i++){
    console.log(`Outer Loop value ${i}`);
    for(let j = 0 ; j <= 10 ; j++){
    // console.log(`inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + '=' + i*j);
    }
}

// Break and Continue

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`5 is best ${index}`);
        break; // stop when 5 is appear
        console.log(`5 is detected ${index}`);
        continue; // excpt 5 all gets print
    }
    console.log(` value of i is ${index}`);
    
}