//the function which can take other 
function parentFunction(name, callback){
    callback();
    console.log("Hey " + name);
}
function randomFunction(){
    console.log("Hey i am callbackfunction");
}

parentFunction("Random String", randomFunction); //synchoronous callback function

//asnchoronous function

function parentFunction(name, callback){
    setTimeout(callback, 1000);
    console.log("Hey " + name);
}


parentFunction("Random String", function(){
    console.log("Hey i am callbackfunction");
})