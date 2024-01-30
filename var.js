function exampleFunction(){
    if(true){
        //let functionScopedVar = "I am function-scoped";
        var functionScopedVar = "I am function-scoped";
        console.log(functionScopedVar);
    }
    
}
exampleFunction();
console.log(functionScopedVar); //Error: functionScopedVar is not defined; outside the function-level scope so gives error because var is function-scoped and let is block-scoped.