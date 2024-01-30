//function ton be executed at intervals

function repeatedFunction() {
    console.log('Executed repeated function...');
}

//Set an interval (executes repeatedfunction every 1000 milliseconds)
const intervalID = setInterval(repeatedFunction, 1000);

//After some time stop the interval
setTimeout(() =>{
    clearInterval(intervalID); //stop the interval
    console.log('Interval stopped.');
},3000);