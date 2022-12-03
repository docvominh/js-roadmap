console.log("Start");
setTimeout(() => {
    console.log("Delayed for 2 second.");
}, 2000)


// Working with asynchronous functions
setTimeout(() => {console.log("this is the first message")}, 9000);
setTimeout(() => {console.log("this is the second message")}, 7000);
setTimeout(() => {console.log("this is the third message")}, 5000);


let action = setTimeout(()=>{console.log("I will pass it")}, 15000);
clearTimeout(action) // prevent the above log